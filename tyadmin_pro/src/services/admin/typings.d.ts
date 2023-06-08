declare namespace API {
  type Category = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** 分类code */
    code?: string;
    /** 分类名 */
    name?: string;
  };

  type CategoryCreateUpdate = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** 分类code */
    code?: string;
    /** 分类名 */
    name?: string;
  };

  type categoryDeleteParams = {
    /** A unique integer value identifying this 分类[被外键关联]. */
    id: number;
  };

  type categoryDisplayOrderParams = {
    code?: string;
    name?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type CategoryList = {
    /** ID */
    id?: number;
    /** Key */
    key: string;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** 分类code */
    code?: string;
    /** 分类名 */
    name?: string;
  };

  type categoryListDisplayParams = {
    code?: string;
    name?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type categoryListParams = {
    code?: string;
    name?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type categoryPartialUpdateParams = {
    /** A unique integer value identifying this 分类[被外键关联]. */
    id: number;
  };

  type categoryReadParams = {
    /** A unique integer value identifying this 分类[被外键关联]. */
    id: number;
  };

  type categoryUpdateParams = {
    /** A unique integer value identifying this 分类[被外键关联]. */
    id: number;
  };

  type categoryVerboseNameParams = {
    code?: string;
    name?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type ContentType = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** App label */
    app_label: string;
    /** Python model class name */
    model: string;
  };

  type ContentTypeCreateUpdate = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** App label */
    app_label: string;
    /** Python model class name */
    model: string;
  };

  type contentTypeDeleteParams = {
    /** A unique integer value identifying this content type. */
    id: number;
  };

  type contentTypeDisplayOrderParams = {
    app_label?: string;
    model?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type ContentTypeList = {
    /** ID */
    id?: number;
    /** Key */
    key: string;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** App label */
    app_label: string;
    /** Python model class name */
    model: string;
  };

  type contentTypeListDisplayParams = {
    app_label?: string;
    model?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type contentTypeListParams = {
    app_label?: string;
    model?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type contentTypePartialUpdateParams = {
    /** A unique integer value identifying this content type. */
    id: number;
  };

  type contentTypeReadParams = {
    /** A unique integer value identifying this content type. */
    id: number;
  };

  type contentTypeUpdateParams = {
    /** A unique integer value identifying this content type. */
    id: number;
  };

  type contentTypeVerboseNameParams = {
    app_label?: string;
    model?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type DemoDefaultModelCreateUpdate = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** Char默认值 */
    default_char_field?: string;
    /** Integer默认值 */
    default_number_field?: number;
    /** Float默认值 */
    default_float_number_field?: number;
    /** Boolean默认值 */
    default_bool_field?: boolean;
    /** Text默认值 */
    default_text_field?: string;
    /** Date默认值 */
    date_field?: string;
    /** DateTime默认值 */
    date_time_field?: string;
  };

  type demoDefaultModelDeleteParams = {
    /** A unique integer value identifying this 全部字段类型-提供默认值. */
    id: number;
  };

  type demoDefaultModelDisplayOrderParams = {
    default_char_field?: string;
    default_number_field?: number;
    default_float_number_field?: number;
    default_bool_field?: string;
    default_text_field?: string;
    date_field?: string;
    date_time_field?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type DemoDefaultModelList = {
    /** ID */
    id?: number;
    /** Key */
    key: string;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** Char默认值 */
    default_char_field?: string;
    /** Integer默认值 */
    default_number_field?: number;
    /** Float默认值 */
    default_float_number_field?: number;
    /** Boolean默认值 */
    default_bool_field?: boolean;
    /** Text默认值 */
    default_text_field?: string;
    /** Date默认值 */
    date_field?: string;
    /** DateTime默认值 */
    date_time_field?: string;
  };

  type demoDefaultModelListDisplayParams = {
    default_char_field?: string;
    default_number_field?: number;
    default_float_number_field?: number;
    default_bool_field?: string;
    default_text_field?: string;
    date_field?: string;
    date_time_field?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type demoDefaultModelListParams = {
    default_char_field?: string;
    default_number_field?: number;
    default_float_number_field?: number;
    default_bool_field?: string;
    default_text_field?: string;
    date_field?: string;
    date_time_field?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type demoDefaultModelPartialUpdateParams = {
    /** A unique integer value identifying this 全部字段类型-提供默认值. */
    id: number;
  };

  type demoDefaultModelReadParams = {
    /** A unique integer value identifying this 全部字段类型-提供默认值. */
    id: number;
  };

  type demoDefaultModelUpdateParams = {
    /** A unique integer value identifying this 全部字段类型-提供默认值. */
    id: number;
  };

  type demoDefaultModelVerboseNameParams = {
    default_char_field?: string;
    default_number_field?: number;
    default_float_number_field?: number;
    default_bool_field?: string;
    default_text_field?: string;
    date_field?: string;
    date_time_field?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type DemoForeignKey = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** CharField列 */
    name?: string;
    /** IntegerField列 */
    number?: number;
    /** FloatField列 */
    float_number?: number;
    /** ImageField列 */
    image?: string;
    /** FileField列 */
    file?: string;
    /** BooleanField列 */
    bool?: boolean;
    /** TextField列 */
    text?: string;
  };

  type DemoForeignKeyCreateUpdate = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** CharField列 */
    name?: string;
    /** IntegerField列 */
    number?: number;
    /** FloatField列 */
    float_number?: number;
    /** ImageField列 */
    image?: string;
    /** FileField列 */
    file?: string;
    /** BooleanField列 */
    bool?: boolean;
    /** TextField列 */
    text?: string;
  };

  type demoForeignKeyDeleteParams = {
    /** A unique integer value identifying this 全部字段非必填[被外键关联]. */
    id: number;
  };

  type demoForeignKeyDisplayOrderParams = {
    name?: string;
    number?: number;
    float_number?: number;
    bool?: string;
    text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type DemoForeignKeyList = {
    /** ID */
    id?: number;
    /** Key */
    key: string;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** CharField列 */
    name?: string;
    /** IntegerField列 */
    number?: number;
    /** FloatField列 */
    float_number?: number;
    /** ImageField列 */
    image?: string;
    /** FileField列 */
    file?: string;
    /** BooleanField列 */
    bool?: boolean;
    /** TextField列 */
    text?: string;
  };

  type demoForeignKeyListDisplayParams = {
    name?: string;
    number?: number;
    float_number?: number;
    bool?: string;
    text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type demoForeignKeyListParams = {
    name?: string;
    number?: number;
    float_number?: number;
    bool?: string;
    text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type demoForeignKeyPartialUpdateParams = {
    /** A unique integer value identifying this 全部字段非必填[被外键关联]. */
    id: number;
  };

  type demoForeignKeyReadParams = {
    /** A unique integer value identifying this 全部字段非必填[被外键关联]. */
    id: number;
  };

  type demoForeignKeyUpdateParams = {
    /** A unique integer value identifying this 全部字段非必填[被外键关联]. */
    id: number;
  };

  type demoForeignKeyVerboseNameParams = {
    name?: string;
    number?: number;
    float_number?: number;
    bool?: string;
    text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type DemoModelCreateUpdate = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** CharField列 */
    char_field: string;
    /** IntegerField列 */
    number_field: number;
    /** FloatField列 */
    float_number_field: number;
    /** ImageField列 */
    image_field?: string;
    /** FileField列 */
    file_field?: string;
    /** BooleanField列 */
    bool_field: boolean;
    /** TextField列 */
    text_field: string;
    /** DateField列 */
    date_field: string;
    /** DateTimeField列 */
    date_time_field: string;
    /** 关联外键 */
    foreign_key_field: number;
  };

  type demoModelDeleteParams = {
    /** A unique integer value identifying this 全部字段类型-必填. */
    id: number;
  };

  type demoModelDisplayOrderParams = {
    char_field?: string;
    number_field?: number;
    float_number_field?: number;
    bool_field?: string;
    text_field?: string;
    date_field?: string;
    date_time_field?: string;
    foreign_key_field?: string;
    foreign_key_field_text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type DemoModelList = {
    /** ID */
    id?: number;
    foreign_key_field: DemoForeignKey;
    /** Key */
    key: string;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** CharField列 */
    char_field: string;
    /** IntegerField列 */
    number_field: number;
    /** FloatField列 */
    float_number_field: number;
    /** ImageField列 */
    image_field?: string;
    /** FileField列 */
    file_field?: string;
    /** BooleanField列 */
    bool_field: boolean;
    /** TextField列 */
    text_field: string;
    /** DateField列 */
    date_field: string;
    /** DateTimeField列 */
    date_time_field: string;
  };

  type demoModelListDisplayParams = {
    char_field?: string;
    number_field?: number;
    float_number_field?: number;
    bool_field?: string;
    text_field?: string;
    date_field?: string;
    date_time_field?: string;
    foreign_key_field?: string;
    foreign_key_field_text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type demoModelListParams = {
    char_field?: string;
    number_field?: number;
    float_number_field?: number;
    bool_field?: string;
    text_field?: string;
    date_field?: string;
    date_time_field?: string;
    foreign_key_field?: string;
    foreign_key_field_text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type demoModelPartialUpdateParams = {
    /** A unique integer value identifying this 全部字段类型-必填. */
    id: number;
  };

  type demoModelReadParams = {
    /** A unique integer value identifying this 全部字段类型-必填. */
    id: number;
  };

  type DemoModelRequireCreateUpdate = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** CharField列 */
    name: 'mode1' | 'mode2';
    /** IntegerField列 */
    number: 1 | 2 | 3;
  };

  type demoModelRequireDeleteParams = {
    /** A unique integer value identifying this 下拉选择示例(choices). */
    id: number;
  };

  type demoModelRequireDisplayOrderParams = {
    name?: string;
    number?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type DemoModelRequireList = {
    /** ID */
    id?: number;
    /** Key */
    key: string;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** CharField列 */
    name: 'mode1' | 'mode2';
    /** IntegerField列 */
    number: 1 | 2 | 3;
  };

  type demoModelRequireListDisplayParams = {
    name?: string;
    number?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type demoModelRequireListParams = {
    name?: string;
    number?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type demoModelRequirePartialUpdateParams = {
    /** A unique integer value identifying this 下拉选择示例(choices). */
    id: number;
  };

  type demoModelRequireReadParams = {
    /** A unique integer value identifying this 下拉选择示例(choices). */
    id: number;
  };

  type demoModelRequireUpdateParams = {
    /** A unique integer value identifying this 下拉选择示例(choices). */
    id: number;
  };

  type demoModelRequireVerboseNameParams = {
    name?: string;
    number?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type demoModelUpdateParams = {
    /** A unique integer value identifying this 全部字段类型-必填. */
    id: number;
  };

  type demoModelVerboseNameParams = {
    char_field?: string;
    number_field?: number;
    float_number_field?: number;
    bool_field?: string;
    text_field?: string;
    date_field?: string;
    date_time_field?: string;
    foreign_key_field?: string;
    foreign_key_field_text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type Group = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** Name */
    name: string;
    permissions?: number[];
  };

  type GroupCreateUpdate = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** Name */
    name: string;
    permissions?: number[];
  };

  type groupDeleteParams = {
    /** A unique integer value identifying this group. */
    id: number;
  };

  type groupDisplayOrderParams = {
    name?: string;
    permissions?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type GroupList = {
    /** ID */
    id?: number;
    permissions: Permission[];
    /** Key */
    key: string;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** Name */
    name: string;
  };

  type groupListDisplayParams = {
    name?: string;
    permissions?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type groupListParams = {
    name?: string;
    permissions?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type groupPartialUpdateParams = {
    /** A unique integer value identifying this group. */
    id: number;
  };

  type groupReadParams = {
    /** A unique integer value identifying this group. */
    id: number;
  };

  type groupUpdateParams = {
    /** A unique integer value identifying this group. */
    id: number;
  };

  type groupVerboseNameParams = {
    name?: string;
    permissions?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type Permission = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** Name */
    name: string;
    /** Codename */
    codename: string;
    /** Content type */
    content_type: number;
  };

  type PermissionCreateUpdate = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** Name */
    name: string;
    /** Codename */
    codename: string;
    /** Content type */
    content_type: number;
  };

  type permissionDeleteParams = {
    /** A unique integer value identifying this permission. */
    id: number;
  };

  type permissionDisplayOrderParams = {
    name?: string;
    content_type?: string;
    codename?: string;
    content_type_text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type PermissionList = {
    /** ID */
    id?: number;
    content_type: ContentType;
    /** Key */
    key: string;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** Name */
    name: string;
    /** Codename */
    codename: string;
  };

  type permissionListDisplayParams = {
    name?: string;
    content_type?: string;
    codename?: string;
    content_type_text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type permissionListParams = {
    name?: string;
    content_type?: string;
    codename?: string;
    content_type_text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type permissionPartialUpdateParams = {
    /** A unique integer value identifying this permission. */
    id: number;
  };

  type permissionReadParams = {
    /** A unique integer value identifying this permission. */
    id: number;
  };

  type permissionUpdateParams = {
    /** A unique integer value identifying this permission. */
    id: number;
  };

  type permissionVerboseNameParams = {
    name?: string;
    content_type?: string;
    codename?: string;
    content_type_text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type RichTextDemoCreateUpdate = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** 标题 */
    name: string;
    /** 内容 */
    content: string;
    /** 作者 */
    user: number;
    /** 分类 */
    category: number;
    tags: number[];
  };

  type richTextDemoDeleteParams = {
    /** A unique integer value identifying this 富文本示例[关联外键，多对多标签]. */
    id: number;
  };

  type richTextDemoDisplayOrderParams = {
    name?: string;
    user?: string;
    content?: string;
    category?: string;
    tags?: string;
    user_text?: string;
    category_text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type RichTextDemoList = {
    /** ID */
    id?: number;
    user: UserProfile;
    category: Category;
    tags: Tags[];
    /** Key */
    key: string;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** 标题 */
    name: string;
    /** 内容 */
    content: string;
  };

  type richTextDemoListDisplayParams = {
    name?: string;
    user?: string;
    content?: string;
    category?: string;
    tags?: string;
    user_text?: string;
    category_text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type richTextDemoListParams = {
    name?: string;
    user?: string;
    content?: string;
    category?: string;
    tags?: string;
    user_text?: string;
    category_text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type richTextDemoPartialUpdateParams = {
    /** A unique integer value identifying this 富文本示例[关联外键，多对多标签]. */
    id: number;
  };

  type richTextDemoReadParams = {
    /** A unique integer value identifying this 富文本示例[关联外键，多对多标签]. */
    id: number;
  };

  type richTextDemoUpdateParams = {
    /** A unique integer value identifying this 富文本示例[关联外键，多对多标签]. */
    id: number;
  };

  type richTextDemoVerboseNameParams = {
    name?: string;
    user?: string;
    content?: string;
    category?: string;
    tags?: string;
    user_text?: string;
    category_text?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type Tags = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** 标签code */
    code?: string;
    /** 标签名 */
    name?: string;
  };

  type TagsCreateUpdate = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** 标签code */
    code?: string;
    /** 标签名 */
    name?: string;
  };

  type tagsDeleteParams = {
    /** A unique integer value identifying this 标签[被多对多关联]. */
    id: number;
  };

  type tagsDisplayOrderParams = {
    code?: string;
    name?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type TagsList = {
    /** ID */
    id?: number;
    /** Key */
    key: string;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** 标签code */
    code?: string;
    /** 标签名 */
    name?: string;
  };

  type tagsListDisplayParams = {
    code?: string;
    name?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type tagsListParams = {
    code?: string;
    name?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type tagsPartialUpdateParams = {
    /** A unique integer value identifying this 标签[被多对多关联]. */
    id: number;
  };

  type tagsReadParams = {
    /** A unique integer value identifying this 标签[被多对多关联]. */
    id: number;
  };

  type tagsUpdateParams = {
    /** A unique integer value identifying this 标签[被多对多关联]. */
    id: number;
  };

  type tagsVerboseNameParams = {
    code?: string;
    name?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type TyAdminEmailVerifyRecord = {
    /** ID */
    id?: number;
    /** 验证码 */
    code: string;
    /** 邮箱 */
    email: string;
    /** 验证码类型 */
    send_type: 'register' | 'forget' | 'update_email' | 'login_auth';
    /** 发送时间 */
    send_time?: string;
  };

  type tyAdminEmailVerifyRecordDeleteParams = {
    /** A unique integer value identifying this TyAdmin邮箱验证码. */
    id: number;
  };

  type tyAdminEmailVerifyRecordDisplayOrderParams = {
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type tyAdminEmailVerifyRecordListDisplayParams = {
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type tyAdminEmailVerifyRecordListParams = {
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type tyAdminEmailVerifyRecordPartialUpdateParams = {
    /** A unique integer value identifying this TyAdmin邮箱验证码. */
    id: number;
  };

  type tyAdminEmailVerifyRecordReadParams = {
    /** A unique integer value identifying this TyAdmin邮箱验证码. */
    id: number;
  };

  type tyAdminEmailVerifyRecordUpdateParams = {
    /** A unique integer value identifying this TyAdmin邮箱验证码. */
    id: number;
  };

  type tyAdminEmailVerifyRecordVerboseNameParams = {
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type TyAdminSysLog = {
    /** ID */
    id?: number;
    /** 动作时间 */
    action_time?: string;
    /** 操作ip */
    ip_addr?: string;
    /** 操作flag */
    action_flag?: string;
    /** 日志记录 */
    message: string;
    /** 日志类型 */
    log_type?: string;
    /** 用户 */
    user_name?: string;
  };

  type tyAdminSysLogDeleteParams = {
    /** A unique integer value identifying this 系统日志. */
    id: number;
  };

  type tyAdminSysLogDisplayOrderParams = {
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type tyAdminSysLogListDisplayParams = {
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type tyAdminSysLogListParams = {
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type tyAdminSysLogPartialUpdateParams = {
    /** A unique integer value identifying this 系统日志. */
    id: number;
  };

  type tyAdminSysLogReadParams = {
    /** A unique integer value identifying this 系统日志. */
    id: number;
  };

  type tyAdminSysLogUpdateParams = {
    /** A unique integer value identifying this 系统日志. */
    id: number;
  };

  type tyAdminSysLogVerboseNameParams = {
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type userPermission = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** Name */
    name: string;
    /** Codename */
    codename: string;
    /** Content type */
    content_type: number;
  };

  type UserProfile = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** Password */
    password: string;
    /** Last login */
    last_login?: string;
    /** Superuser status Designates that this user has all permissions without explicitly assigning them. */
    is_superuser?: boolean;
    /** Username Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
    username: string;
    /** First name */
    first_name?: string;
    /** Last name */
    last_name?: string;
    /** Email address */
    email?: string;
    /** Staff status Designates whether the user can log into this admin site. */
    is_staff?: boolean;
    /** Active Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
    is_active?: boolean;
    /** Date joined */
    date_joined?: string;
    /** 性别 */
    gender?: 'male' | 'female';
    /** 头像 */
    image?: string;
    /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
    groups?: number[];
    /** Specific permissions for this user. */
    user_permissions?: number[];
  };

  type UserProfileCreateUpdate = {
    /** ID */
    id?: number;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** Password */
    password: string;
    /** Last login */
    last_login?: string;
    /** Superuser status Designates that this user has all permissions without explicitly assigning them. */
    is_superuser?: boolean;
    /** Username Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
    username: string;
    /** First name */
    first_name?: string;
    /** Last name */
    last_name?: string;
    /** Email address */
    email?: string;
    /** Staff status Designates whether the user can log into this admin site. */
    is_staff?: boolean;
    /** Active Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
    is_active?: boolean;
    /** Date joined */
    date_joined?: string;
    /** 性别 */
    gender?: 'male' | 'female';
    /** 头像 */
    image?: string;
    /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
    groups?: number[];
    /** Specific permissions for this user. */
    user_permissions?: number[];
  };

  type userProfileDeleteParams = {
    /** A unique integer value identifying this 用户管理. */
    id: number;
  };

  type userProfileDisplayOrderParams = {
    password?: string;
    last_login?: string;
    is_superuser?: string;
    groups?: string;
    user_permissions?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_staff?: string;
    is_active?: string;
    date_joined?: string;
    gender?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type UserProfileList = {
    /** ID */
    id?: number;
    groups: Group[];
    user_permissions: userPermission[];
    /** Key */
    key: string;
    /** Ty options display txt */
    ty_options_display_txt?: string;
    /** Password */
    password: string;
    /** Last login */
    last_login?: string;
    /** Superuser status Designates that this user has all permissions without explicitly assigning them. */
    is_superuser?: boolean;
    /** Username Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
    username: string;
    /** First name */
    first_name?: string;
    /** Last name */
    last_name?: string;
    /** Email address */
    email?: string;
    /** Staff status Designates whether the user can log into this admin site. */
    is_staff?: boolean;
    /** Active Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
    is_active?: boolean;
    /** Date joined */
    date_joined?: string;
    /** 性别 */
    gender?: 'male' | 'female';
    /** 头像 */
    image?: string;
  };

  type userProfileListDisplayParams = {
    password?: string;
    last_login?: string;
    is_superuser?: string;
    groups?: string;
    user_permissions?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_staff?: string;
    is_active?: string;
    date_joined?: string;
    gender?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type userProfileListParams = {
    password?: string;
    last_login?: string;
    is_superuser?: string;
    groups?: string;
    user_permissions?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_staff?: string;
    is_active?: string;
    date_joined?: string;
    gender?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };

  type userProfilePartialUpdateParams = {
    /** A unique integer value identifying this 用户管理. */
    id: number;
  };

  type userProfileReadParams = {
    /** A unique integer value identifying this 用户管理. */
    id: number;
  };

  type userProfileUpdateParams = {
    /** A unique integer value identifying this 用户管理. */
    id: number;
  };

  type userProfileVerboseNameParams = {
    password?: string;
    last_login?: string;
    is_superuser?: string;
    groups?: string;
    user_permissions?: string;
    username?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_staff?: string;
    is_active?: string;
    date_joined?: string;
    gender?: string;
    /** A search term. */
    search?: string;
    /** A page number within the paginated result set. */
    current?: number;
    /** Number of results to return per page. */
    pageSize?: number;
  };
}
