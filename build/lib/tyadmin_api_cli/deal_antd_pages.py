import os


from django.contrib.auth import get_user_model
from django.db.models import ForeignKey, CharField, DateTimeField, DateField, BooleanField, IntegerField, FloatField, FileField, ImageField
from django.db.models.fields import NOT_PROVIDED
from tyadmin_api_cli.contants import MAIN_DISPLAY, MAIN_AVATAR, MAIN_PIC,SYS_LABELS
from tyadmin_api_cli.fileds import richTextField, SImageField
from tyadmin_api_cli.utils import init_django_env, get_lower_case_name


def gen_antd_pages(project_name_settings, user_label_list, focus_model=None, template_type="base"):
    # focus_model = 'HistoricalNetworkDevice'
    init_django_env(project_name_settings)
    import django
    from django.conf import settings
    gen_labels = SYS_LABELS + user_label_list
    # focus_model = "CourseResource"
    model_pic_dict = {}
    model_date_dict = {}
    user = get_user_model()
    model_list = django.apps.apps.get_models()
    for one in model_list:
        columns = []
        model_name = one._meta.model.__name__
        print(model_name)
        model_ver_name = one._meta.verbose_name_raw
        # if(isinstance(model_ver_name,__proxy__)):
        if focus_model and model_name != focus_model:
            continue
        if one._meta.app_label in gen_labels:
            print("^^"*20)
            print(one._meta.app_label)
            print("^^"*20)
            img_field_list = []
            date_row_list = []
            model_add_item_list = []
            model_many_to_many_list = []
            model_import_item_list = []
            date_field_list = []
            fileds_num = len(one.objects.model._meta.fields)

            for filed in one.objects.model._meta.fields:
                name = filed.name
                ver_name = filed.verbose_name
                if isinstance(filed, ForeignKey):
                    rela_model = filed.related_model._meta.object_name
                    if one._meta.app_label == "auth" and name == "content_type":
                        help_text = "model"
                    else:
                        if MAIN_DISPLAY in filed.help_text:
                            help_text = filed.help_text.replace(MAIN_DISPLAY + "__", "")
                        else:
                            try:
                                help_text = settings.ADMIN_ADAPTER[one._meta.app_label][one.objects.model._meta.object_name][filed.name]
                            except KeyError:
                                raise ValueError(f"温馨提示: App: {one._meta.app_label}中 Model: {one.objects.model._meta.object_name} 外键字段: {filed.name} 未进行指定！请根据文档进行指定！")
                    if filed.blank == True:
                        one_c = """{
                                            title: '%s',
                                            dataIndex: '%s',
                                            backendType: 'foreignKey',
                                            rules: [
                                            ],
                                                  renderFormItem: (item, {value, onChange}) => {
                          const children = $模型名字$ForeignKeyList.map((item) => {
                            return <Option key={item.id} value={item.id}>{item.$外键显示字段$}</Option>;
                          });
                          return <Select
                            placeholder="请选择$模型显示名字$"
                            onChange={onChange}
                          >
                            {children}
                          </Select>;
                        },
                                          },""" % (ver_name, name)
                    else:
                        one_c = """{
                              title: '%s',
                              dataIndex: '%s',
                              backendType: 'foreignKey',
                              rules: [
                                {
                                  required: true,
                                  message: '%s为必填项',
                                },
                              ],
                                    renderFormItem: (item, {value, onChange}) => {
            const children = $模型名字$ForeignKeyList.map((item) => {
              return <Option key={item.id} value={item.id}>{item.$外键显示字段$}</Option>;
            });
            return <Select
              placeholder="请选择$模型显示名字$"
              onChange={onChange}
            >
              {children}
            </Select>;
          },
                            },""" % (ver_name, name, ver_name)
                    one_c = one_c.replace("$模型名字$", name)
                    one_c = one_c.replace("$外键显示字段$", help_text)
                    print(name)
                    print(filed)
                    if isinstance(filed.verbose_name,str):
                       one_c = one_c.replace("$模型显示名字$", filed.verbose_name)
                    else:
                       one_c = one_c.replace("$模型显示名字$", name)
                    model_add_item = """const [$模型名字$ForeignKeyList, set$模型名字首字母大写$ForeignKeyList] = useState([]);
      useEffect(() => {
        query$关联Model$().then(value => {
          set$模型名字首字母大写$ForeignKeyList(value.data);
        });
      }, []);""".replace("$模型名字$", name).replace("$模型名字首字母大写$", name[0].upper() + name[1:]).replace("$关联Model$", rela_model)
                    model_add_item_list.append(model_add_item)
                    model_import_item = """import {query$关联Model$} from '@/pages/AutoGenPage/$关联Model$List/service';""".replace("$关联Model$",
                                                                                                                                rela_model)
                    if model_import_item not in model_import_item_list and model_name != rela_model:
                        model_import_item_list.append(model_import_item)
                elif isinstance(filed, CharField):
                    if filed.default != NOT_PROVIDED:
                        default_replace = f' initialValue: "{filed.default}",'
                    else:
                        default_replace = ""
                    if filed.choices:
                        filed_choices_list = []
                        for filed_one in filed.choices:
                            one_line = f'"{filed_one[0]}":"{filed_one[1]}"'
                            filed_choices_list.append(one_line)
                        if filed.blank == True:
                            one_c = """{
                            %s
                                                                       title: '%s',
                                                                       dataIndex: '%s',
                                                                       rules: [
                                                                       ],
                                                                       valueEnum: {
                                                                         $valueEnum$
                                                                        },
                                                                     },""" % (default_replace, ver_name, name)
                        else:
                            one_c = """{
                            %s
                                           title: '%s',
                                           dataIndex: '%s',
                                           rules: [
                                             {
                                               required: true,
                                               message: '%s为必填项',
                                             },
                                           ],
                                           valueEnum: {
                                             $valueEnum$
                                            },
                                         },""" % (default_replace, ver_name, name, ver_name)
                        one_c = one_c.replace("$valueEnum$", ",".join(filed_choices_list))
                    elif name == "password":
                        one_c = """{
                        %s
                                          title: '%s',
                                          dataIndex: '%s',
                                          hideInTable: true,
                                  hideInSearch: true,
                                          rules: [
                                            {
                                              required: true,
                                              message: '%s为必填项',
                                            },
                                          ],
                                        },""" % (default_replace, ver_name, name, ver_name)
                    else:
                        if filed.blank == True:
                            one_c = """{
                            %s
                              title: '%s',
                              dataIndex: '%s',
                              rules: [
                              ],
                            },""" % (default_replace, ver_name, name)
                        else:
                            one_c = """{
                            %s
                      title: '%s',
                      dataIndex: '%s',
                      rules: [
                        {
                          required: true,
                          message: '%s为必填项',
                        },
                      ],
                    },""" % (default_replace, ver_name, name, ver_name)
                elif name == "id":
                    if filed.default != NOT_PROVIDED:
                        default_replace = f' initialValue: "{filed.default}",'
                    else:
                        default_replace = ""
                    one_c = """{
                    %s
                                  title: '%s',
                                  dataIndex: '%s',
                                  hideInForm: true,
                                  hideInSearch: true,
                                  rules: [
                                    {
                                      required: true,
                                      message: '%s为必填项',
                                    },
                                  ],
                                },""" % (default_replace, ver_name, name, ver_name)
                elif isinstance(filed, DateTimeField):
                    print(filed.default)
                    hideInform = None
                    if filed.default != django.db.models.NOT_PROVIDED or filed.auto_now == True:
                        hideInform = True
                    one_c = """{
              title: '%s',
              dataIndex: '%s',
              valueType: 'dateTime',
              $隐藏form$
              rules: [
                {
                  required: true,
                  message: '%s为必填项',
                },
              ],
                                       render: (text, record) => {
          return dealDateTimeDisplay(text);
        },
            },""" % (ver_name, name, ver_name)
                    if hideInform:
                        one_c = one_c.replace("$隐藏form$", "hideInForm: true,")
                    else:
                        one_c = one_c.replace("$隐藏form$", "")
                    date_field_list.append('"' + name + '"')
                    date_row_list.append(f'record.{name} = moment(record.{name});')
                elif isinstance(filed, DateField):
                    if filed.auto_now == True:
                        pass
                    one_c = """{
                         title: '%s',
                         dataIndex: '%s',
                         valueType: 'date',
                         rules: [
                           {
                             required: true,
                             message: '%s为必填项',
                           },
                         ],
                       },""" % (ver_name, name, ver_name)
                    date_field_list.append('"' + name + '"')
                    date_row_list.append(f'record.{name} = moment(record.{name});')
                elif isinstance(filed, BooleanField):
                    if filed.default != NOT_PROVIDED:
                        if filed.default:
                            default_replace = f' initialValue: true,'
                        else:
                            default_replace = f' initialValue: false,'
                    else:
                        default_replace = ""
                    if filed.blank == True:
                        one_c = """{
                        %s
                                                          title: '%s',
                                                          dataIndex: '%s',
                                                          rules: [
                                                          ],
                                                              render: (text, record) => {
                                  return BooleanDisplay(text);
                                },
                                                              renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
                                  const is_value = form.getFieldValue('%s');
                                  if (type === "form" && !is_value) {
                                    form.setFieldsValue({'%s': false});
                                  }
                                  return <Switch checked={is_value} onClick={(checked) => {
                                    form.setFieldsValue({'%s': checked});
                                  }} />;
                                },
                                                        },""" % (default_replace, ver_name, name, name, name, name)
                    else:
                        one_c = """{
                        %s
                                  title: '%s',
                                  dataIndex: '%s',
                                  rules: [
                                    {
                                      required: true,
                                      message: '%s为必填项',
                                    },
                                  ],
                                      render: (text, record) => {
          return BooleanDisplay(text);
        },
                                      renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
          const is_value = form.getFieldValue('%s');
          if (type === "form" && !is_value) {
            form.setFieldsValue({'%s': false});
          }
          return <Switch checked={is_value} onClick={(checked) => {
            form.setFieldsValue({'%s': checked});
          }} />;
        },
                                },""" % (default_replace, ver_name, name, ver_name, name, name, name)
                elif isinstance(filed, IntegerField) or isinstance(filed, FloatField):
                    if filed.default != NOT_PROVIDED:
                        default_replace = f' initialValue: {filed.default},'
                    else:
                        default_replace = ""
                    if filed.choices:
                        filed_choices_list = []
                        for filed_one in filed.choices:
                            one_line = f'{filed_one[0]}:"{filed_one[1]}"'
                            filed_choices_list.append(one_line)
                            if filed.blank == True:
                                one_c = """{
                                %s
                                          title: '%s',
                                          dataIndex: '%s',
                                          rules: [
                                          ],
                                           valueEnum: {
                                                     $valueEnum$
                                                    },
                                        },""" % (default_replace, ver_name, name)
                            else:
                                one_c = """{
                                 %s
                                          title: '%s',
                                          dataIndex: '%s',
                                          rules: [
                                            {
                                              required: true,
                                              message: '%s为必填项',
                                            },
                                          ],
                                           valueEnum: {
                                                     $valueEnum$
                                                    },
                                        },""" % (default_replace, ver_name, name, ver_name)
                            one_c = one_c.replace("$valueEnum$", ",".join(filed_choices_list))
                    else:
                        if filed.blank == True:
                            one_c = """{
                             %s
                                      title: '%s',
                                      dataIndex: '%s',
                                                valueType: 'digit',
                                      rules: [
                                      ],
                                    },""" % (default_replace, ver_name, name)
                        else:
                            one_c = """{
                             %s
                                      title: '%s',
                                      dataIndex: '%s',
                                                valueType: 'digit',
                                      rules: [
                                        {
                                          required: true,
                                          message: '%s为必填项',
                                        },
                                      ],
                                    },""" % (default_replace, ver_name, name, ver_name)
                elif isinstance(filed, ImageField) or isinstance(filed, SImageField):
                    img_field_list.append('"' + name + '"')
                    help_text = filed.help_text

                    if help_text == MAIN_AVATAR:
                        if filed.blank == True:
                            one_c = """{
                                                title: '%s',
                                                dataIndex: '%s',
                                         valueType: 'avatar',
                                                       hideInSearch: true,
                                                rules: [
                                                ],
                                                renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
                              const imageUrl = form.getFieldValue('%s');
                              return <UploadAvatar img={imageUrl}/>
                            },
                                              },""" % (ver_name, name, name)
                        else:
                            one_c = """{
                            title: '%s',
                            dataIndex: '%s',
                     valueType: 'avatar',
                                   hideInSearch: true,
                            rules: [
                              {
                                required: true,
                                message: '%s为必填项',
                              },
                            ],
                            renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
          const imageUrl = form.getFieldValue('%s');
          return <UploadAvatar img={imageUrl}/>
        },
                          },""" % (ver_name, name, ver_name, name)
                    else:
                        if filed.blank == True:
                            one_c = """{
                                                title: '%s',
                                                dataIndex: '%s',
                                                              render: (text, record) => {
                                          return <img src={text} width="80px" alt=""/>
                                        },
                                                      hideInSearch: true,
                                                rules: [
                                                ],
                                                 renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
                              const imageUrl = form.getFieldValue('%s');
                              return <UploadAvatar img={imageUrl}/>
                            },
                                              },""" % (ver_name, name, name)
                        else:
                            one_c = """{
                            title: '%s',
                            dataIndex: '%s',
                                          render: (text, record) => {
                      return <img src={text} width="80px" alt=""/>
                    },
                                  hideInSearch: true,
                            rules: [
                              {
                                required: true,
                                message: '%s为必填项',
                              },
                            ],
                             renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
          const imageUrl = form.getFieldValue('%s');
          return <UploadAvatar img={imageUrl}/>
        },
                          },""" % (ver_name, name, ver_name, name)
                elif isinstance(filed, FileField):
                    img_field_list.append('"' + name + '"')
                    if filed.blank == True:
                        one_c = """{
                                                            title: '%s',
                                                            dataIndex: '%s',
                                                                   hideInSearch: true,
                                                            rules: [
                                                            ],
                                                                render: (text, record) => {
                          return <a download={text.split('/').slice(-1)} href={text}>{text.split('/').slice(-1)}</a>;
                        },    renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
                          const downloadUrl = form.getFieldValue('download');
                          return fileUpload(downloadUrl);
                        },
    
                                                          },""" % (ver_name, name)
                    else:
                        one_c = """{
                                                                                    title: '%s',
                                                                                    dataIndex: '%s',
                                                                                           hideInSearch: true,
                                                                                    rules: [
                                                                                      {
                                                                                        required: true,
                                                                                        message: '%s为必填项',
                                                                                      },
                                                                                    ],
                                                                                        render: (text, record) => {
                                                  return <a download={text.split('/').slice(-1)} href={text}>{text.split('/').slice(-1)}</a>;
                                                },    renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
                                                  const downloadUrl = form.getFieldValue('download');
                                                  return fileUpload(downloadUrl);
                                                },

                                                                                  },""" % (ver_name, name, ver_name)
                elif filed.__class__.__name__ == "TextField":
                    if filed.default != NOT_PROVIDED:
                        default_replace = f' initialValue: "{filed.default}",'
                    else:
                        default_replace = ""
                    if filed.blank == True:
                        one_c = """{
                        %s
                                                          title: '%s',
                                                          dataIndex: '%s',
                                                        valueType: 'textarea',
                                                         ellipsis: true,
                                                          rules: [
                                                          ],
                                                        },""" % (default_replace, ver_name, name)
                    else:
                        one_c = """{
                        %s
                                  title: '%s',
                                  dataIndex: '%s',
                                valueType: 'textarea',
                                 ellipsis: true,
                                  rules: [
                                    {
                                      required: true,
                                      message: '%s为必填项',
                                    },
                                  ],
                                },""" % (default_replace, ver_name, name, ver_name)
                elif filed.__class__.__name__ == "UEditorField" or isinstance(filed, richTextField):
                    if filed.default != NOT_PROVIDED:
                        default_replace = f' initialValue: "{filed.default}",'
                    else:
                        default_replace = ""
                    if filed.blank == True:
                        one_c = """{
                        %s
                                                          title: '%s',
                                                          dataIndex: '%s',
                                                              customCol:richCol,
                                                              ellipsis: true,
                                                                                            hideInSearch: true,
                                                          rules: [
                                                          ],
                                                              renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
                                  return richForm(form, rest.id);
                                },
                                                        },""" % (default_replace, ver_name, name)
                    else:
                        one_c = """{
                                  title: '%s',
                                  dataIndex: '%s',
                                      customCol:richCol,
                                      ellipsis: true,
                                                                    hideInSearch: true,
                                  rules: [
                                    {
                                      required: true,
                                      message: '%s为必填项',
                                    },
                                  ],
                                      renderFormItem: (_, {type, defaultRender, ...rest}, form) => {
          return richForm(form, rest.id);
        },
                                },""" % (default_replace, ver_name, name, ver_name)
                else:
                    if filed.default != NOT_PROVIDED:
                        default_replace = f' initialValue: "{filed.default}",'
                    else:
                        default_replace = ""
                    if filed.blank == True:
                        one_c = """{
                        %s
                          title: '%s',
                          dataIndex: '%s',
                          rules: [
                          ],
                        },""" % (default_replace, ver_name, name)
                    else:
                        print(filed.__class__.__name__)
                        one_c = """{
                        %s
                      title: '%s',
                      dataIndex: '%s',
                      rules: [
                        {
                          required: true,
                          message: '%s为必填项',
                        },
                      ],
                    },""" % (default_replace, ver_name, name, ver_name)
                model_pic_dict[model_name] = img_field_list
                model_date_dict[model_name] = date_field_list
                columns.append(one_c)

            for filed in one.objects.model._meta.many_to_many:
                black_many_to_many = []
                if filed.name in black_many_to_many:
                    continue
                else:
                    name = filed.name
                    ver_name = filed.verbose_name
                    rela_model = filed.related_model._meta.object_name
                    print("&&&"*30)
                    print(one._meta.app_label, name)
                    print("&&&"*30)
                    if one._meta.app_label == "auth" and name == "permissions":
                        help_text = "name"
                    elif one._meta.app_label == user._meta.app_label and name == "groups":
                        help_text = "name"
                    elif one._meta.app_label == user._meta.app_label and name == "user_permissions":
                        help_text = "name"
                    else:
                        if MAIN_DISPLAY in filed.help_text:
                            help_text = filed.help_text.replace(MAIN_DISPLAY + "__", "")
                        else:
                            try:
                                help_text = settings.ADMIN_ADAPTER[one._meta.app_label][one.objects.model._meta.object_name][filed.name]
                            except KeyError:
                                raise ValueError(f"当前app: {one._meta.app_label}中 Model: {one.objects.model._meta.object_name} 多对多字段未进行指定！请根据文档进行指定！\n如果是第三方App，请在Settings.py中根据文档规则指定！")
                    if filed.blank == True:
                        one_c = """{
                      title: '%s',
                      dataIndex: '%s',
                      rules: [
                      ],
                      renderFormItem: (item, {value, onChange}) => {
              const children = %sManyToManyList.map(item => {
                return (
                  <Option key={item.id} value={item.id}>
                    {item.%s}
                  </Option>
                );
              });
              return (
                <Select mode="multiple" placeholder="请选择%s" onChange={onChange}>
                  {children}
                </Select>
              );
            },
                render: (text, record) => {
              const color_arr = [
                'green',
                'cyan',
                'blue',
                'geekblue',
                'purple',
                'magenta',
                'red',
                'volcano',
                'orange',
                'gold',
                'lime',
              ];
              const child = [];
              text.forEach((value, index, arr) => {
                child.push(<Tag color={color_arr[value $百分$ 10]}>{%sManyToManyMap[value]}</Tag>);
              });
              return <Space>{child}</Space>;
            },
                    },""" % (ver_name, name, name, help_text, ver_name, name)
                    else:
                        one_c = """{
                                             title: '%s',
                                             dataIndex: '%s',
                                             rules: [
                                               {
                                                 required: true,
                                                 message: '%s为必填项',
                                               },
                                             ],
                                             renderFormItem: (item, {value, onChange}) => {
                                     const children = %sManyToManyList.map(item => {
                                       return (
                                         <Option key={item.id} value={item.id}>
                                           {item.%s}
                                         </Option>
                                       );
                                     });
                                     return (
                                       <Select mode="multiple" placeholder="请选择%s" onChange={onChange}>
                                         {children}
                                       </Select>
                                     );
                                   },
                                       render: (text, record) => {
                                     const color_arr = [
                                       'green',
                                       'cyan',
                                       'blue',
                                       'geekblue',
                                       'purple',
                                       'magenta',
                                       'red',
                                       'volcano',
                                       'orange',
                                       'gold',
                                       'lime',
                                     ];
                                     const child = [];
                                     text.forEach((value, index, arr) => {
                                       child.push(<Tag color={color_arr[value $百分$ 10]}>{%sManyToManyMap[value]}</Tag>);
                                     });
                                     return <Space>{child}</Space>;
                                   },
                                           },""" % (ver_name, name, ver_name, name, help_text, ver_name, name)
                    one_c = one_c.replace("$百分$", "%")
                    model_many_to_many_item = """const [$模型名字$ManyToManyList, set$模型名字首字母大写$ManyToManyList] = useState([]);
                      const [$模型名字$ManyToManyMap, set$模型名字首字母大写$ManyToManyMap] = useState([]);
                    useEffect(() => {
                      query$关联Model$().then(value => {
                        set$模型名字首字母大写$ManyToManyList(value.data);
                        let get$模型名字首字母大写$ManyToManyMap = {};
              for (let index in value.data) {
                let item = value.data[index];
                get$模型名字首字母大写$ManyToManyMap[item.id.toString()] = item.$关联字段$;
              }
              set$模型名字首字母大写$ManyToManyMap(get$模型名字首字母大写$ManyToManyMap);
                      });
                    }, []);""".replace("$模型名字$", name).replace("$模型名字首字母大写$", name[0].upper() + name[1:]) \
                        .replace("$关联Model$", rela_model).replace("$关联字段$", help_text)
                    model_many_to_many_list.append(model_many_to_many_item)
                    model_import_item = """import {query$关联Model$} from '@/pages/AutoGenPage/$关联Model$List/service';""".replace("$关联Model$",
                                                                                                                                rela_model)
                    if model_import_item not in model_import_item_list and model_name !=rela_model:
                        model_import_item_list.append(model_import_item)
                    columns.append(one_c)
            if one._meta.app_label == user._meta.app_label:
                opera = """    {
                                              title: '操作',
                                              dataIndex: 'option',
                                              valueType: 'option',
                                                    fixed: 'right',
                          width: 100,
                                              render: (text, record) => (
                                                <>

                                                  <EditOutlined title="编辑" className="icon" onClick={async () => {
                                                    $时间处理占位$
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
                                                    title="您确定要删除$模型名字$吗？"
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
                                            },""".replace("$模型名字$", model_ver_name)
            else:
                opera = """    {
                              title: '操作',
                              dataIndex: 'option',
                              valueType: 'option',
                                    fixed: 'right',
          width: 100,
                              render: (text, record) => (
                                <>
    
                                  <EditOutlined title="编辑" className="icon" onClick={async () => {
                                    $时间处理占位$
                                    handleUpdateModalVisible(true);
                                    setUpdateFormValues(record);
                                  }} />
                                  <Divider type="vertical" />
                                  <Popconfirm
                                    title="您确定要删除$模型名字$吗？"
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
                            },""".replace("$模型名字$", model_ver_name)
            opera = opera.replace("$时间处理占位$", "".join(date_row_list))
            columns.append(opera)
            dest_path = f'{os.path.dirname(__file__)}/antd_page_templates/{template_type}'
            with open(f'{dest_path}/index.jsx') as fr:

                content = fr.read()
                if fileds_num > 8:
                    new_content = content.replace("$两列布局占位$", """          search={{
                                span: {
                                  lg: 12,
                                  md: 12,
                                  xxl: 12,
                                  xl: 12,
                                  sm: 12,
                                  xs: 24,
                                },
                              }}""")
                else:
                    new_content = content.replace("$两列布局占位$", "")
                new_content = new_content.replace("$占位列数据$", "".join(columns))
                new_content = new_content.replace("$占位模型名$", model_name)
                new_content = new_content.replace("$占位模型显示名$", str(model_ver_name))
                new_content = new_content.replace("$外键占位$", "".join(model_add_item_list))
                new_content = new_content.replace("$多对多占位$", "".join(model_many_to_many_list))
                new_content = new_content.replace("$import占位$", "".join(model_import_item_list))
                new_content = new_content.replace("$时间占位$", ",".join(model_date_dict[model_name]))
                if one._meta.app_label == user._meta.app_label:
                    new_content = new_content.replace("$passwordform引入$", """import UpdatePasswordForm from './components/UpdatePasswordForm';""")
                    new_content = new_content.replace("$Password占位$", 'const [updatePassWordModalVisible, handleUpdatePassWordModalVisible] = useState(false);\nconst [updatePasswordForm] = Form.useForm();')
                    new_content = new_content.replace("$更新密码方法占位$", """  const handlePassWordUpdate = () => {
    if (updatePasswordForm.getFieldValue('password') !== updatePasswordForm.getFieldValue('re_password')) {
      updatePasswordForm.setFields([{
        name: 're_password',
        errors: ['两次密码不一致'],
      }]);
    } else {
      updatePasswordForm.validateFields().then(
        value => {
          updateUserPassword({
            ...value,
            username: updateFormValues["username"],
          }).then(
            message.success('密码修改成功'),
            handleUpdatePassWordModalVisible(false),
          );
        },
      );
      form.submit;
    }
  };""")
                    new_content = new_content.replace("$Password更新Form$", """      {
                      <UpdatePasswordForm
                        onCancel={() => {
                          handleUpdatePassWordModalVisible(false);
                        }}
                        handleUpdate={handlePassWordUpdate}
                        updateModalVisible={updatePassWordModalVisible}
                        userName={updateFormValues["username"]}
                      >
                        <Form form={updatePasswordForm}>
                          <FormItem
                            labelCol={{
                              span: 5,
                            }}
                            wrapperCol={{
                              span: 15,
                            }}
                            label="密码"
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: '请输入密码！',
                              },
                            ]}
                          >
                            <Input.Password placeholder="请输入密码" type="password" />
                          </FormItem>
                          <FormItem
                            labelCol={{
                              span: 5,
                            }}
                            wrapperCol={{
                              span: 15,
                            }}
                            label="重复密码"
                            name="re_password"
                            rules={[
                              {
                                required: true,
                                message: '请输入重复密码',
                              },
                            ]}
                          >
                            <Input.Password placeholder="请再次输入密码" type="password" />
                          </FormItem>
    
                        </Form>
                      </UpdatePasswordForm>
                    }""")
                else:
                    new_content = new_content.replace("$passwordform引入$","")
                    new_content = new_content.replace("$Password占位$",'')
                    new_content = new_content.replace("$更新密码方法占位$",'')
                    new_content = new_content.replace("$Password更新Form$",'')

            if len(model_pic_dict[model_name]) > 0:
                with open(f'{dest_path}/service_img.js') as fr:
                    content = fr.read()
                    new_services = content.replace("$占位path$", get_lower_case_name(model_name))
                    new_services = new_services.replace("$占位模型名$", model_name)
                    new_services = new_services.replace("$图片字段列表$", ",".join(model_pic_dict[model_name]))
            else:
                with open(f'{dest_path}/service.js') as fr:
                    content = fr.read()
                    new_services = content.replace("$占位path$", get_lower_case_name(model_name))
                    new_services = new_services.replace("$占位模型名$", model_name)
                    if one._meta.app_label == user._meta.app_label:
                        new_services = new_services.replace("$更新密码service占位$", """
                        export async function updateUserPassword(params) {
  return request('/api/xadmin/v1/list_change_password', {
    method: 'POST',
    data: { ...params},
  });
}
                        """)
                    else:
                        new_services = new_services.replace("$更新密码service占位$","")
            with open(f'{dest_path}/components/CreateForm.jsx') as fr:
                create_form = fr.read()
                create_form = create_form.replace("$占位模型显示名$", str(model_ver_name))
                if fileds_num > 8:
                    create_form = create_form.replace("$宽度占位$", 'width={1200}')
                else:
                    create_form = create_form.replace("$宽度占位$", "width={600}")
            with open(f'{dest_path}/components/UpdateForm.jsx') as fr:
                update_form = fr.read()
                update_form = update_form.replace("$占位模型显示名$", str(model_ver_name))
                if fileds_num > 8:
                    update_form = update_form.replace("$宽度占位$", 'width={1200}')
                else:
                    update_form = update_form.replace("$宽度占位$", "width={600}")

            with open(f'{dest_path}/components/UpdatePasswordForm.jsx') as fr:
                change_password_form = fr.read()

            target_path = f'{settings.BASE_DIR}/tyadmin/src/pages/AutoGenPage'
            cur_path = f'{target_path}/{model_name}List'
            if not os.path.exists(cur_path):
                os.mkdir(cur_path)
            cur_path_co = f'{target_path}/{model_name}List/components'
            if not os.path.exists(cur_path_co):
                os.mkdir(cur_path_co)
            with open(f'{target_path}/{model_name}List/index.jsx', 'w') as fw:
                fw.write(new_content)
            with open(f'{target_path}/{model_name}List/service.js', 'w') as fw:
                fw.write(new_services)
            with open(f'{target_path}/{model_name}List/components/CreateForm.jsx', 'w') as fw:
                fw.write(create_form)
            with open(f'{target_path}/{model_name}List/components/UpdateForm.jsx', 'w') as fw:
                fw.write(update_form)
            if one._meta.app_label == user._meta.app_label:
                with open(f'{target_path}/{model_name}List/components/UpdatePasswordForm.jsx', 'w') as fw:
                    fw.write(change_password_form)


if __name__ == '__main__':
    settings_name = input("请输入项目settings位置:")
    user_label_list = input('请输入要生成的app列表用逗号分割，如: "article","users"')
    user_label_list = user_label_list.split(",")
    gen_antd_pages(settings_name, user_label_list)
