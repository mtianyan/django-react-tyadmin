import os
import shutil


def init_tyadmin_api(package_path, project_path):
    tyadmin_api_path = os.path.join(project_path,"tyadmin_api")
    if os.path.exists(tyadmin_api_path):
        print(f"已经初始化过tyadmin_api了，跳过,如需重新初始化请删除{tyadmin_api_path}")
    else:
        shutil.copytree(f'{package_path}/tyadmin_api_init',
                        f'{project_path}/tyadmin_api')
        print(f"已初始化后端app—> {tyadmin_api_path}")


def init_tyadmin(package_path, project_path):
    tyadmin_path = os.path.join(project_path,"tyadmin")
    if os.path.exists(tyadmin_path):
        print(f"已经初始化过tyadmin了，跳过,如需重新初始化请删除{tyadmin_path}")
    else:
        shutil.copytree(f'{package_path}/antd_full_templates',
                        f'{project_path}/tyadmin')
        print(f"已初始化前端项目—> {tyadmin_path}")
