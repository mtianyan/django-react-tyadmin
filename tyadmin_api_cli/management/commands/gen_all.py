import os

from django.conf import settings
from django.core.management import BaseCommand

from tyadmin_api_cli.init_filter_serial_url_view import gen_all
from tyadmin_api_cli.utils import init_django_env

from tyadmin_api_cli.cmd import init_tyadmin_api, init_tyadmin


class Command(BaseCommand):
    help = '初始化Tyadmin，会生成一个django app tyadmin_api 和 tyadmin前端项目'

    # 接收参数
    def add_arguments(self, parser):
        parser.add_argument('--models',required=True, default="", type=str, help='请输入要生成的app列表用逗号分割，如: "article","users"')

    def handle(self, *args, **options):
        try:
            setting_value = options['settings']
        except KeyError:
            raise ValueError("请设置settings")
        try:
            models_list = options['models']
        except KeyError:
            raise ValueError("请设置models列表")
        models_list = models_list.split(",")
        gen_all(setting_value, models_list)

