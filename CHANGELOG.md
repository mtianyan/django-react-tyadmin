## v0.5.0 (2020-10-25)

#### Features / Enhancement
- tyadmin->adapters插件机制，可为生成注入指定app->指定model->指定字段，前端import，service，state，effect，column处理
- tyadmin_api->adapters package 新增django-celery-beat task 自动发现适配
- 读取第三方包 django-admin fileset 字段展示顺序优化体验一致性
- 导出当前模型所有数据，导出当前所选行数据
- 优化form表单下方提交按钮奇数行，另起一行，mtianyan-pro-table@2.4.19 支持
- 403 时，notification 弹窗体验优化
- django-celery-beat crontab TimeZoneField 显示下拉选择，及后端保存
- 时间序列化自动格式化，不需要用户额外settings设置drf datetimeformat 相关项
- 优化表单异常处理，囊括未知异常
- 字段显示由后端接口控制，默认只显示前6个非时间字段，其余隐藏，可通过右侧工具栏显示。
- 优化全字段显示滑动条，可拖动查看后面字段，操作栏固定在右侧。
- Image字段verbose name包含"头像"， 或字段名为avatar，显示为圆形头像

#### Bug Fixes
- Fixed dashboard 第三方model 兼容显示count
- Fixed 表格包含manytomany 列title 错误问题
- Fixed 前端多对多空值，hasOwnProperty异常，type异常
- Fixed 用户app下其他model，也被生成了密码按钮

## v0.4.0 (2020-10-24)

#### Features / Enhancement
- django_celery_beat 生成兼容
- 列表提供默认主键排序
- 不再需要对外键，多对多field进行单独标记，可自动生成
- 更新多对多下拉选择框为穿梭框，多个多对多展示，省略处理
- 外键field 下拉框添加搜索
- settings.py 提供GEN_APPS变量指明要生成哪几个app
- 移除--models，可直接python manage.py gen_all user app_2,统一使用体验
- 外键右侧小图标可弹窗显示外键表完整数据

#### Bug Fixes
- Fixed 退出登录问题
- Fixed 多对多显示分页问题


## v0.3.0 (2020-10-23)

#### Features / Enhancement
- 已完成 头像下拉修改密码
- 用户列表修改密码
- django 内置权限，组兼容
- Model field 中default值对应前端生成

#### Bug Fixes
- Fixed 退出登录问题
- Fixed 多对多显示分页问题