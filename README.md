# TyAdmin: Django 基于Models 的 **No Code** 零代码零学习成本管理后台前后端生成工具, 由Django Restful Framework 和 Ant Design Pro V4 驱动

![](https://img.shields.io/pypi/v/tyadmin-api-cli)
![](https://img.shields.io/pypi/wheel/tyadmin-api-cli)

支持Python3.9! 不限Django版本支持，支持最新Django4！支持Django3！

# 🎬 在线体验Demo

>账号: tyadmin 密码: tyadmin

~~演示地址: https://tyadmin.funpython.cn/xadmin~~

**No Code!!! 一行代码都不写，就能拥有的现代化后台管理, 动动小手，**star**一下，感谢！！**

TyAdmin: 只需要花五分钟阅读README即可快速上手，无额外文档，无框架学习成本，不用自己写一行代码，全自动的后台，你值得拥有！

# ✨ 特性

- 自动生成前后端管理后台，页面接口神奇全自动对接。登录验证，修改密码，Dashboard数据统计。
- 一次拥有 **增删改查，筛选，搜索，数据全量导出，选择导出** 
- **外键字段，多对多字段，富文本，文件，图片，django自带权限系统**

只需要设计好Model，在settings中配置需要生成哪些model，运行命令: [快速上手](#快速上手) 

>后端生成一个django app到项目目录, 只需注册一下， 无需再写一行代码！ 代码归你掌控，无阻二次开发！
>前端生成一个Ant Design Pro V4项目，只需启动一次，无需再写一行代码！ 代码归你掌控，无阻二次开发！

前端页面，后端接口，路由，菜单全部自动对接,你只需要拷贝文档，修改配置，不需要写一行代码！！

# 🎁 内置

## 1. 多种登录方式

![](http://cdn.pic.funpython.cn/blog_img/20201130234228.png)

## 2. 内嵌自动dashboard，自动注册现有model count 数据。

![](http://cdn.pic.funpython.cn/blog_img/20201130234054.png)

## 3. 全自动的列表展示，增删改查， 筛选，搜索，导出Excel

![](http://cdn.pic.funpython.cn/blog_img/20201130234448.png)

![](http://cdn.pic.funpython.cn/blog_img/20201130234525.png)

## 4. django自带权限组支持，外键蓝点小标记pop支持

![](http://cdn.pic.funpython.cn/blog_img/20201130234705.png)

![](http://cdn.pic.funpython.cn/blog_img/20201130234753.png)

## 5. 基于Model定义的表单字段级别自动验证

![](http://cdn.pic.funpython.cn/blog_img/20201010194705.png)

## 6. 内嵌富文本支持,仅需把字段定义为`richTextField`,无需任何额外集成。

![](http://cdn.pic.funpython.cn/blog_img/20201010192630.png)

# 快速上手🤟 

📨 互动交流反馈QQ群: 304094780

>已有项目可从第二步开始，注意修改GEN_APPS 变量为自己需要生成的app列表
>如有问题，可对比demos下tyadmin_demo_finish项目找自己的不同,以及查看[QA环节](#QA环节)

## 1. 下载demo项目安装依赖(注意！！已有项目不需要下载demo项目可从第二步开始，注意修改GEN_APPS 变量为自己需要生成的app列表)

```
git clone https://github.com/mtianyan/tyadmin_api_cli.git
cd tyadmin_api_cli/demos/tyadmin_demo_init
# 安装项目 原本就需要的依赖
pip install -r requirements.txt
```

## 2. 安装tyadmin-api-cli并注册tyadmin-api-cli

```diff
pip install tyadmin-api-cli

INSTALLED_APPS = [
+    'captcha',
+    'tyadmin_api_cli',
]

+TY_ADMIN_CONFIG = {
+    'GEN_APPS': ['demo']
+}

# 方便拷贝

    'captcha',
    'tyadmin_api_cli',

TY_ADMIN_CONFIG = {
    'GEN_APPS': ['demo']
}
```

GEN_APPS: 填写你想要生成的app列表。 

## 3. 初始化 后端app(tyadmin_api) + 前端项目(tyadmin)  && 生成后端自动化的视图，过滤器，路由，序列器 + 前端页面及路由菜单

生成后端页面依赖，需安装Node.js -> https://www.runoob.com/nodejs/nodejs-install-setup.html

>安装Node.js 10以上，推荐安装版本Latest LTS Version: 12.19.0

```
python manage.py init_admin && python manage.py gen_all && cd tyadmin && npm install && npm run build
```

>耐心等待一会，build 会输出 前端页面到templates文件夹，生成前端js,css 等到static文件夹

## 4. 注册生成出的django app

```diff
INSTALLED_APPS = [
    'captcha',
    'tyadmin_api_cli',
+   'tyadmin_api'
]

# 方便拷贝

'tyadmin_api'
```

## 5. 注册首页路由，api路由

./tyadmin_demo/urls.py

```diff
+ from tyadmin_api.views import AdminIndexView

urlpatterns = [
+    re_path('^xadmin/.*', AdminIndexView.as_view()),
+    path('api/xadmin/v1/', include('tyadmin_api.urls')),
]

# 方便拷贝
from tyadmin_api.views import AdminIndexView

re_path('^xadmin/.*', AdminIndexView.as_view()),
path('api/xadmin/v1/', include('tyadmin_api.urls')),
```

## 6. 运行项目

```
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser # 创建一个可以登入后台的用户
python manage.py runserver # 默认运行在8000端口
```

访问http://127.0.0.1:8000/xadmin/ 输入刚才创建的用户名密码登录

至此大功告成！

>如果没有成功看到页面，请查看QA部分

# QA环节

## 0. `TemplateDoesNotExist at /xadmin/ TyAdmin/index.html`

settings.py 中配置templates 路径

```diff
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
-        'DIRS': [],
+        'DIRS': [os.path.join(BASE_DIR, 'templates')],
```
## 1. 卡在loading页面，一直无法登陆

settings.py 中配置static 路径

```
if DEBUG:
    STATICFILES_DIRS = [
        os.path.join(BASE_DIR, "static"),
    ]
else:
    STATIC_ROOT = os.path.join(BASE_DIR, 'static')
```

## 2. 图片没有正常显示

urls.py 

```
from django.views.static import serve

urlpatterns = [
re_path('media/(?P<path>.*)', serve, {"document_root": settings.MEDIA_ROOT}),
]
```

## 3. 当项目新增了model，我该如何为新model生成前端页面+后端接口

```diff
+TY_ADMIN_CONFIG = {
+    'GEN_APPS': ['demo','new_app']
+}
```
如上GEN_APPS 中添加新app的name，然后运行下面命令

```
python manage.py gen_all && cd tyadmin && npm run build
```

## 4. 项目修改了model，重新生成页面为何不生效

> 为防止你对已生成前端进行的二次开发被覆盖，默认是不强制覆盖已生成的前端。如果需要重新生成，请添加如下配置 FORCED_COVER

```diff
TY_ADMIN_CONFIG = {
    'FORCED_COVER': True,
    'GEN_APPS': ['demo']
}
```

## 5. 如何运行生成的前端独立项目

```
cd tyadmin
npm install
npm run start:dev # 默认会运行在8001端口
```

请确认django运行在8000端口，访问 http://127.0.0.1:8001/xadmin/

# 🤝 贡献者名单:

[longyn](https://github.com/longyn)

# 🤟 打赏

很高兴我的项目代码或许对你有帮助，请我吃包辣条或喝瓶可乐吧!

微信打赏:

![mark](http://myphoto.funpython.cn/blog/180302/i52eHgilfD.png?imageslim)

# 🔑 License

[MIT](https://github.com/go-admin-team/go-admin/blob/master/LICENSE.md)

Copyright (c) 2020 mtianyan


# 附录

## model->前端对应关系

|  字段类型   | 前端展示  |
|  ----  | ----  |
| ForeignKey  | 单选 |
| ManyToManyField  | 多选 & 多彩标签展示 |
| richTextField  | 富文本展示 |
| CharField or IntegerField(with choices)  | 多选 |
| CharField or IntegerField  | 输入框 |
| ImageField  | 带预览上传，可选头像，图片列表展示 |
| FileField  | 文件上传 |
| TextField  | TextArea框 |
| BooleanField | Switch选择|
| IntegerField | 数字input|
| DateField| Date选择器|
| DateTimeField| DateTime选择器|

### ForeignKey自动生成下拉单选菜单, ManyToManyField自动生成下拉多选菜单或穿梭框

![](http://cdn.pic.funpython.cn/blog_img/20201202214922.png)

![](http://cdn.pic.funpython.cn/blog_img/20201202214936.png)

![](http://cdn.pic.funpython.cn/blog_img/20201202214957.png)

### richTextField 自动生成富文本

```
detail = richTextField(verbose_name="课程详情")
```

![](http://cdn.pic.funpython.cn/blog_img/20201010193352.png)

### CharField和IntegerField choices 自动生成表单前端下拉选择框。

```python
GENDER_CHOICES = (
   ("male", "男"),
   ("female", "女")
)
gender = CharField(verbose_name="性别",choices=GENDER_CHOICES)
```

![](http://cdn.pic.funpython.cn/blog_img/20201010190635.png)

### ImageField 自动生成带预览的表单上传功能，列表页可选两种展示方式。

```python
avatar = ImageField(verbose_name="头像") # 变量名为avatar或logo的会自动为头像样式
image = ImageField(verbose_name="封面图")    
```

![](http://cdn.pic.funpython.cn/blog_img/20201010191641.png)

![](http://cdn.pic.funpython.cn/blog_img/20201010191917.png)

![](http://cdn.pic.funpython.cn/blog_img/20201010191843.png)

### FileField 字段生成文件上传功能。

```
download = FileField(verbose_name="资源文件")
```

![](http://cdn.pic.funpython.cn/blog_img/20201010193041.png)

### TextField 自动生成前端TextArea 框

```python
desc = TextField(verbose_name="课程描述")
```

![](http://cdn.pic.funpython.cn/blog_img/20201010192813.png)

### BooleanField 自动前端 Boolean 单选

```python
is_banner = BooleanField(verbose_name="是否轮播")
```

![](http://cdn.pic.funpython.cn/blog_img/20201010193001.png)

### IntegerField 自动前端 Int 输入框
```
learn_times = IntegerField(verbose_name="学习时长(分钟数)")
```
![](http://cdn.pic.funpython.cn/blog_img/20201010193445.png)

### DateField 自动前端 Date选择框

```
birthday = DateField(verbose_name="生日")
```
![](http://cdn.pic.funpython.cn/blog_img/20201010193614.png)

### DateTimeField 自动表单 DateTime 选择框，时间范围筛选器。

```
last_login = DateTimeField(verbose_name="上次登录")
```

![](http://cdn.pic.funpython.cn/blog_img/20201010193852.png)

>注意设置了default，auto_now的不会出现在表单

![](http://cdn.pic.funpython.cn/blog_img/20201010195116.png)

