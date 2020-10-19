
from tyadmin_api_cli.utils import get_lower_case_name, init_django_env


def gen_route(project_name_settings):
    init_django_env(project_name_settings)
    import django
    from django.conf import settings
    path_list = []
    sys_label = ['admin', 'auth', 'contenttypes', 'sessions', 'captcha', 'xadmin', 'tyadmin_api', 'authtoken', 'social_django']
    for one in django.apps.apps.get_models():
        if one._meta.app_label not in sys_label:
            url = "/xadmin/" + get_lower_case_name(one._meta.model.__name__)
            one = "{" + f"""
                      name: '{one._meta.verbose_name}',
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
    with open(f'{settings.BASE_DIR}/tyadmin_api/menu.json', 'w') as fw:
        fw.write(inner_before_list+",".join(path_list)+inner_after_list)
    with open(f'{settings.BASE_DIR}/tyadmin/config/auto_menu.json', 'w') as fw:
        fw.write(inner_before_list+",".join(path_list)+inner_after_list)


if __name__ == '__main__':
    name = input("请输入项目settings位置:")
    gen_route(name)
