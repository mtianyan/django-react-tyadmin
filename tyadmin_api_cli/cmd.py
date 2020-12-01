import os
import shutil


def init_tyadmin_api(package_path, project_path):
    path = f'{project_path}/tyadmin_api'
    if os.path.exists(path):
        print(f"{path}: 已经初始化过了，跳过")
    else:
        shutil.copytree(f'{package_path}/tyadmin_api_init',
                        f'{project_path}/tyadmin_api')


def init_tyadmin(package_path, project_path):
    path = f'{project_path}/tyadmin'
    if os.path.exists(path):
        print(f"{path}: 已经初始化过了，跳过")
    else:
        shutil.copytree(f'{package_path}/antd_full_templates',
                        f'{project_path}/tyadmin')
