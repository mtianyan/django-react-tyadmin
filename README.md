# TyAdmin: Django 基于Models 的 **No Code** 零代码零学习成本管理后台前后端生成工具, 由Django Restful Framework 和 Ant Design Pro V4 驱动

![](https://img.shields.io/pypi/v/tyadmin-api-cli)
![](https://img.shields.io/pypi/wheel/tyadmin-api-cli)

## 🎬 在线体验Demo

>账号: tyadmin 密码: tyadmin

演示地址: https://tyadmin.funpython.cn/xadmin 

**No Code!!! 一行代码都不写，就能拥有的现代化后台管理**

TyAdmin: 只需要花五分钟阅读README即可快速上手，无额外文档，无框架学习成本，不用自己写一行代码，全自动的后台，你值得拥有！

📨 互动交流反馈QQ群: 304094780

[快速上手](#快速上手) 

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

![](http://cdn.pic.mtianyan.cn/blog_img/20201130234228.png)

## 2. 内嵌自动dashboard，自动注册现有model count 数据。

![](http://cdn.pic.mtianyan.cn/blog_img/20201130234054.png)

## 3. 全自动的列表展示，增删改查， 筛选，搜索，导出Excel

![](http://cdn.pic.mtianyan.cn/blog_img/20201130234448.png)

![](http://cdn.pic.mtianyan.cn/blog_img/20201130234525.png)

## 4. django自带权限组支持，外键蓝点小标记pop支持

![](http://cdn.pic.mtianyan.cn/blog_img/20201130234705.png)

![](http://cdn.pic.mtianyan.cn/blog_img/20201130234753.png)

## 5. 基于Model定义的表单字段级别自动验证

![](http://cdn.pic.mtianyan.cn/blog_img/20201010194705.png)

## 6. 内嵌富文本支持,仅需把字段定义为`richTextField`,无需任何额外集成。

![](http://cdn.pic.mtianyan.cn/blog_img/20201010192630.png)

# 快速上手 

>已有项目可从第二步开始，注意修改GEN_APPS 变量为自己需要生成的app列表
>如有问题，可对比demos下tyadmin_demo_finish项目找自己的不同,以及查看[QA环节](#QA环节)

## 1. 下载demo项目安装依赖

```
git clone https://github.com/mtianyan/tyadmin_api_cli.git
cd tyadmin_api_cli/demos/tyadmin_demo_init
# 安装项目 原本就需要的依赖
pip install -r requirement.txt
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
python manage.py 
