
from tyadmin_api_cli.utils import get_lower_case_name, init_django_env, trans
from tyadmin_api_cli.contants import SYS_LABELS

def gen_route(project_name_settings, user_label_list):
    init_django_env(project_name_settings)
    import django
    from django.conf import settings
    if not user_label_list:
        user_label_list = settings.TY_ADMIN_CONFIG["GEN_APPS"]
    path_list = []
    gen_labels = SYS_LABELS + user_label_list
    gen_labels = [one for one in gen_labels if one != "contenttypes"]
    for one in django.apps.apps.get_models():
        if one._meta.app_label in gen_labels:
            model_name = trans(one._meta.verbose_name)
            url = "/xadmin/" + get_lower_case_name(one._meta.model.__name__)
            one = "{" + f"""
                      name: '{model_name}',
                      icon: 'smile',
                      path: '{url}',
                      component: './AutoGenPage/{one._meta.model.__name__}List',
                   """ + "}"
            # print(one)
            path_list.append(one)
    inner_before_list = """
                [
          {
            name: '首页',
            path: '/xadmin/index',
            icon: 'dashboard',
            component: './TyAdminBuiltIn/DashBoard'
          },
            """
    inner_after_list = """
   ,{
    name: 'Tyadmin内置',
    icon: 'VideoCamera',
    path: '/xadmin/sys',
    routes: [
      {
        name: 'TyAdmin日志',
        icon: 'smile',
        path: '/xadmin/sys/ty_admin_sys_log',
        component: './TyAdminBuiltIn/TyAdminSysLogList'
      },
      {
        name: 'TyAdmin验证',
        icon: 'smile',
        path: '/xadmin/sys/ty_admin_email_verify_record',
        component: './TyAdminBuiltIn/TyAdminEmailVerifyRecordList'
      }
    ]
  }]
        """
    with open(f'{settings.BASE_DIR}/tyadmin_api/menu.json', 'w', encoding='utf-8') as fw:
        fw.write(inner_before_list+",".join(path_list)+inner_after_list)
    with open(f'{settings.BASE_DIR}/tyadmin/config/auto_menu.json', 'w', encoding='utf-8') as fw:
        fw.write(inner_before_list+",".join(path_list)+inner_after_list)


if __name__ == '__main__':
    # name = input("请输入项目settings位置:")
    name = "skyoms.settings"
    gen_route(name, None)