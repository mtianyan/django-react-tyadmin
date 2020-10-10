# 基于Django Restful Framework 和 Antd Design Pro V4 类似Xadmin 的基于Models 的管理后台前后端生成工具。

![](https://img.shields.io/pypi/v/tyadmin-api-cli)
![](https://img.shields.io/pypi/wheel/tyadmin-api-cli)

更强大，更现代化，自定义度更高的Xadmin！！！
自动生成前后端管理后台，神奇自动对接。免去普通增删改查，筛选，搜索功能开发。

只需要设计好Model，运行两条命令`python manage.py init_admin`,`python manage.py gen_all`

>后端代码生成一个django app到项目目录, 代码归你掌控，无阻二次开发！
>前端生成一个完整的Antd design pro V4项目，代码归你掌控，无阻二次开发！

前端页面， 后端接口，路由，菜单全部自动对接。

已生成示例网站: 

1. https://imooc.funpython.cn/xadmin/index

2. https://mooc.funpython.cn/xadmin

## 内嵌自动dashboard，自动注册现有model count 数据。

![](http://cdn.pic.mtianyan.cn/blog_img/20201010184239.png)

## 全自动的列表展示，搜索，筛选功能。

![](http://cdn.pic.mtianyan.cn/blog_img/20201010192457.png)

## 内嵌富文本支持,仅需把字段定义为`richTextField`,无需任何额外集成。

![](http://cdn.pic.mtianyan.cn/blog_img/20201010192630.png)

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

>指定`f'{MAIN_DISPLAY}__name'` 关联另一张表哪个字段用于table显示

```python
course_org = ForeignKey(CourseOrg, verbose_name="所属机构",
                        help_text=f'{MAIN_DISPLAY}__name')
```

![](http://cdn.pic.mtianyan.cn/blog_img/20201010192310.png)

```
labels = ManyToManyField("Label", verbose_name="课程拥有的label", 
                help_text=f'{MAIN_DISPLAY}__title')
```

![](http://cdn.pic.mtianyan.cn/blog_img/20201010194349.png)

![](http://cdn.pic.mtianyan.cn/blog_img/20201010194222.png)

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
avatar = ImageField(verbose_name="头像", help_text=MAIN_AVATAR)
image = ImageField(verbose_name="封面图", help_text=MAIN_PIC)    
```

![](http://cdn.pic.mtianyan.cn/blog_img/20201010191641.png)

头像样式 `MAIN_AVATAR`:

![](http://cdn.pic.mtianyan.cn/blog_img/20201010191917.png)

图片样式 `MAIN_PIC`:

![](http://cdn.pic.mtianyan.cn/blog_img/20201010191843.png)

### FileField 字段生成文件上传功能。

```
download = FileField(verbose_name="资源文件", max_length=100)
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

### DateTimeField 自动表单 DateTime 选择框。时间范围筛选器。

```
last_login = DateTimeField(verbose_name="上次登录")
```

![](http://cdn.pic.mtianyan.cn/blog_img/20201010193852.png)

>注意设置了default，auto_now的不会出现在表单

![](http://cdn.pic.mtianyan.cn/blog_img/20201010195116.png)

## 基于Model定义的表单字段级别自动验证

```
    title = CharField(max_length=255, verbose_name="课程标题", unique=True)
```

![](http://cdn.pic.mtianyan.cn/blog_img/20201010194705.png)

## 轻松的后端自定义验证

```
if xxx:
    raise ValidationError({"filed_name": ["错误提示"]})
```

## demo项目快速上手


### 1. 初始化项目(推荐使用cookiecutter)

```
cookiecutter https://github.com/mtianyan/cookiecutter-tyadmin-demo.git
```

### 2. 安装tyadmin-api-cli

```
pip install tyadmin-api-cli
```

### 3. 注册tyadmin-api-cli

```
INSTALLED_APPS = [
    'tyadmin_api_cli',
]
```

### 4. 初始化 后端app 及 前端项目

```
python manage.py init_admin
```

### 5. 生成后端自动化的视图，过滤器，路由，序列器。 前端页面及路由菜单。

```
python manage.py gen_all
```

### 6. 注册生成出的app

```
INSTALLED_APPS = [
    'tyadmin_api_cli',
    'captcha',
    'tyadmin_api'
]
```

### 7. 注册路由

```
    path('api/xadmin/v1/', include('tyadmin_api.urls')),
```

### 8. 运行后端项目，运行前端项目

```
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

```
cd tyadmin
yarn
yarn start
```

访问http://127.0.0.1:8001/xadmin/index
