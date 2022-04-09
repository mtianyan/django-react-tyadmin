## 0.8.2 (2022-04-09)

- 替换demjson 为demjson3解决安装依赖问题 https://github.com/mtianyan/django-antd-tyadmin/issues/35 https://github.com/mtianyan/django-antd-tyadmin/issues/36
- 修复添加用户密码为明文的问题 https://github.com/mtianyan/django-antd-tyadmin/issues/12

## 0.8.1 (2020-12-09)

#### Bug Fixes

- 便于二次开发默认不再覆盖，

## 0.8.0 (2020-12-01)

#### Bug Fixes

- 修复图片显示

#### Features / Enhancement

- 合并app级别菜单生成
- 支持直接生成，不需要启动一个前端服务
- 权限定义宽度

## 0.7.2 (2020-12-01)

#### Bug Fixes

- 修复多对多关系编辑，文件，图片编辑
- 修复时间字段错误
- 更改默认多对多样式为穿梭框，demo添加多对多样式重定义示例

## 0.7.0 (2020-11-30)

#### Bug Fixes

- 重构页面生成代码，统一处理默认值等情况
- 修复编码问题，创建文件夹问题
- 优化生成命令提示信息

#### Features / Enhancement

- 添加demo项目，作为各种情况的测试项目
- 更新README部分教程

## v0.6.3 (2020-10-26)

#### Bug Fixes
- Fixed 导出全部，导出当前，manytomany字段处理
- Fixed 点击导出全部后，选择表格行数据后空显示

## v0.6.0 (2020-10-26)

#### Bug Fixes
- Fixed 富文本前端import异常
- Fixed manytomany create form data 类型异常

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