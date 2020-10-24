## v0.3.0 (2020-10-24)

#### Features / Enhancement
- django_celery_beat 生成兼容
- 列表提供默认主键排序
- 不再需要对外键，多对多field进行单独标记，可自动生成
- 更新多对多下拉选择框为穿梭框，多个多对多展示，省略处理
- 外键field 下拉框添加搜索
- settings.py 提供GEN_APPS变量指明要生成哪几个app
- 移除--models，可直接python manage.py gen_all user app_2,统一使用体验

#### Bug Fixes
- Fixed 退出登录问题
- Fixed 多对多显示分页问题