# TyAdmin 基于Django Restful Framework 和 Antd Design Pro V4 的基于Models 的 **No Code** 零代码零学习成本管理后台前后端生成工具。

![](https://img.shields.io/pypi/v/tyadmin-api-cli)
![](https://img.shields.io/pypi/wheel/tyadmin-api-cli)

线上demo地址: https://tyadmin.funpython.cn/xadmin 账号: tyadmin 密码: tyadmin

TyAdmin: 只需要花五分钟按着README中快速上手配置，无额外文档，无框架学习成本，零代码，全自动！更强大！更现代化！功能更多！

0. 自动生成前后端管理后台，页面接口神奇全自动对接。登录验证，修改密码，Dashboard数据统计。
1. 一次拥有 **增删改查，筛选，搜索，数据全量导出，选择导出** 
2. 外键字段，多对多字段，富文本，文件，图片，django自带权限系统，
3. 已兼容第三方 django-celery-beat 后台管理

## 多种登录方式

![](http://cdn.pic.mtianyan.cn/blog_img/20201130234228.png)

## 内嵌自动dashboard，自动注册现有model count 数据。

![](http://cdn.pic.mtianyan.cn/blog_img/20201130234054.png)

## 全自动的列表展示，增删改查， 筛选，搜索，导出Excel

![](http://cdn.pic.mtianyan.cn/blog_img/20201130234448.png)

![](http://cdn.pic.mtianyan.cn/blog_img/20201130234525.png)

## django自带权限组支持，外键蓝点小标记pop支持

![](http://cdn.pic.mtianyan.cn/blog_img/20201130234705.png)

![](http://cdn.pic.mtianyan.cn/blog_img/20201130234753.png)

## 基于Model定义的表单字段级别自动验证

![](http://cdn.pic.mtianyan.cn/blog_img/20201010194705.png)

## 内嵌富文本支持,仅需把字段定义为`richTextField`,无需任何额外集成。

![](http://cdn.pic.mtianyan.cn/blog_img/20201010192630.png)

交流反馈群: 304094780

只需要设计好Model，在settings中配置需要生成哪些model，运行一条命令`python manage.py init_admin && python manage.py gen_all`

>后端代码生成一个django app到项目目录, 只需注册一下， 无需再写一行代码！ 代码归你掌控，无阻二次开发！
>前端生成一个完整的Antd design pro V4项目，只需启动一次，无需再写一行代码！ 代码归你掌控，无阻二次开发！

前端页面，后端接口，路由，菜单全部自动对接。

# 快速上手 (已有项目可从第二步开始，注意修改GEN_APPS 变量为自己需要生成的app列表)

>如有问题，可对比demos下tyadmin_demo_finish项目找自己的不同

### 1. 下载demo项目安装依赖

```
git clone https://github.com/mtianyan/tyadmin_api_cli.git
cd tyadmin_api_cli/demos/tyadmin_demo_init
# 安装项目 原本就需要的依赖
pip install -r requirement.txt
```

### 2. 安装tyadmin-api-cli并注册tyadmin-api-cli

```
pip install tyadmin-api-cli

INSTALLED_APPS = [
    'captcha',
    'tyadmin_api_cli',
]

TY_ADMIN_CONFIG = {
    'GEN_APPS': ['demo']
}
```

GEN_APPS: 填写你想要生成的app列表。

### 3. 初始化 后端app(tyadmin_api) + 前端项目(tyadmin)  && 生成后端自动化的视图，过滤器，路由，序列器 + 前端页面及路由菜单

```
python manage.py init_admin && python manage.py gen_all
```

### 5. 注册生成出的app

```diff
INSTALLED_APPS = [
    'captcha',
    'tyadmin_api_cli',
+   'tyadmin_api'
]
```

### 6. 注册路由

demos/tyadmin_demo_complete/tyadmin_demo/urls.py

```
    path('api/xadmin/v1/', include('tyadmin_api.urls')),
```

### 7. 运行后端项目，运行前端项目

```
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser # 创建一个可以登入后台的用户
python manage.py runserver # 默认运行在8000端口
```

安装Node.js -> https://www.runoob.com/nodejs/nodejs-install-setup.html

>安装Node.js 10以上，推荐安装版本Latest LTS Version: 12.19.0

```
cd tyadmin
npm install
npm run start:dev # 默认会运行在8001端口
```

访问http://127.0.0.1:8001/xadmin/ 输入刚才创建的用户名密码登录查看系统

# 附录(随意了解一下即可)

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

### ForeignKey自动生成下拉单选菜单, ManyToManyField自动生成下拉多选菜单



### richTextField 自动生成富文本

```
detail = richTextField(verbose_name="课程详情")
```

![](http://cdn.pic.mtianyan.cn/blog_img/20201010193352.png)

### CharField和IntegerField choices 自动生成表单前端下拉选择框。

```python
GENDER_CHOICES = (
   ("male", "男"),
   ("female", "女")
)
gender = CharField(verbose_name="性别",choices=GENDER_CHOICES)
```

![](http://cdn.pic.mtianyan.cn/blog_img/20201010190635.png)

### ImageField 自动生成带预览的表单上传功能，列表页可选两种展示方式。

```python
avatar = ImageField(verbose_name="头像") # 变量名为avatar或logo的会自动为头像样式
image = ImageField(verbose_name="封面图")    
```

![](http://cdn.pic.mtianyan.cn/blog_img/20201010191641.png)

![](http://cdn.pic.mtianyan.cn/blog_img/20201010191917.png)

![](http://cdn.pic.mtianyan.cn/blog_img/20201010191843.png)

### FileField 字段生成文件上传功能。

```
download = FileField(verbose_name="资源文件")
```

![](http://cdn.pic.mtianyan.cn/blog_img/20201010193041.png)

### TextField 自动生成前端TextArea 框

```python
desc = TextField(verbose_name="课程描述")
```

![](http://cdn.pic.mtianyan.cn/blog_img/20201010192813.png)

### BooleanField 自动前端 Boolean 单选

```python
is_banner = BooleanField(verbose_name="是否轮播")
```

![](http://cdn.pic.mtianyan.cn/blog_img/20201010193001.png)

### IntegerField 自动前端 Int 输入框
```
learn_times = IntegerField(verbose_name="学习时长(分钟数)")
```
![](http://cdn.pic.mtianyan.cn/blog_img/20201010193445.png)

### DateField 自动前端 Date选择框

```
birthday = DateField(verbose_name="生日")
```
![](http://cdn.pic.mtianyan.cn/blog_img/20201010193614.png)

### DateTimeField 自动表单 DateTime 选择框，时间范围筛选器。

```
last_login = DateTimeField(verbose_name="上次登录")
```

![](http://cdn.pic.mtianyan.cn/blog_img/20201010193852.png)

>注意设置了default，auto_now的不会出现在表单

![](http://cdn.pic.mtianyan.cn/blog_img/20201010195116.png)



