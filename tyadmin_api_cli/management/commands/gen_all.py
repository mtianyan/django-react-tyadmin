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
        parser.add_argument(
            'args', metavar='app_label', nargs='*',
            help='Specify the app label(s) to create migrations for.',
        )

    def handle(self, *args, **options):
        try:
            setting_value = options['settings']
        except KeyError:
            raise ValueError("请设置settings")
        try:
            all_apps_list = settings.TY_ADMIN_CONFIG["GEN_APPS"]
        except KeyError:
            raise ValueError("请按照文档设置TY_ADMIN_CONFIG-GEN_APPS")
        if len(args) > 0:
            apps_list = list(args)
            for one in all_apps_list:
                if one not in all_apps_list:
                    raise ValueError("输入的app，不在GEN_APPS列表中")
        else:
            apps_list = all_apps_list
        gen_all(setting_value, apps_list)
