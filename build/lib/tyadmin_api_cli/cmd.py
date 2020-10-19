import os
import shutil


def init_tyadmin_api(package_path, project_path):
    if os.path.exists(f'{project_path}/tyadmin_api'):
        print("已经初始化过了，跳过")
    else:
        shutil.copytree(f'{package_path}/tyadmin_api_init',
                        f'{project_path}/tyadmin_api')


def init_tyadmin(package_path, project_path):
    if os.path.exists(f'{project_path}/tyadmin'):
        print("已经初始化过了，跳过")
    else:
        shutil.copytree(f'{package_path}/antd_full_templates',
                        f'{project_path}/tyadmin')
