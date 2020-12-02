from os import path
from collections import OrderedDict
from django.db import router
from tyadmin_api_cli.utils import get_lower_case_name, init_django_env, trans, format_json_string
from tyadmin_api_cli.contants import SYS_LABELS


def gen_route(project_name_settings, user_label_list):
    import django
    from django.conf import settings

    init_django_env(project_name_settings)

    if not user_label_list:
        user_label_list = settings.TY_ADMIN_CONFIG["GEN_APPS"]

    # before
    inner_before_list = ["\n".join([
        "[",
        "{",
        "  name: 'Home',",
        "  path: '/xadmin/index',",
        "  icon: 'dashboard',",
        "  component: './TyAdminBuiltIn/DashBoard'",
        "}"]),
        "\n".join([
            "{",
            "  path: '/xadmin/',",
            "  redirect: '/xadmin/index',",
            "}",
        ])]

    # route
    gen_labels = SYS_LABELS + user_label_list
    gen_labels = [one for one in gen_labels if one != "contenttypes"]

    menu_groups = OrderedDict()
    menu_display_dict = {}
    for model in django.apps.apps.get_models():
        if model._meta.app_label not in gen_labels:
            continue

        # 中文
        # group_name = model._meta.app_config.verbose_name
        # model_name = trans(model._meta.verbose_name)

        group_display = model._meta.app_config.verbose_name
        group_name = model._meta.app_label
        menu_display_dict[group_name] = group_display
        model_name = model._meta.verbose_name

        url = f'/xadmin/{group_name}/{get_lower_case_name(model._meta.model.__name__)}'
        menu = "\n".join([
            "{",
            f"  name: '{model_name}',",
            f"  path: '{url}',",
            f"  component: './AutoGenPage/{model._meta.model.__name__}List',",
            "}",
        ])

        if group_name not in menu_groups:
            menu_groups[group_name] = []

        menu_groups[group_name].append(menu)

    group_route_list = inner_before_list

    for group_name, route_list in menu_groups.items():
        group_route = "\n".join([
            "{",
            f"  name: '{menu_display_dict[group_name]}',",
            "   icon: 'BarsOutlined',",
            f"  path: '/xadmin/{group_name}',",
            "   routes:",
            "   [",
            ',\n'.join(route_list),
            "   ]"]) + "\n  }"
        group_route_list.append(group_route)

    # after
    group_route_list.append("\n".join([
        "{",
        "  name: 'TyadminBuiltin',",
        "  icon: 'VideoCamera',",
        "  path: '/xadmin/sys',",
        "  routes:",
        "    [",
        "        {",
        "           name: 'TyAdminLog',",
        "           icon: 'smile',",
        "           path: '/xadmin/sys/ty_admin_sys_log',",
        "           component: './TyAdminBuiltIn/TyAdminSysLogList'",
        "        },",
        "        {",
        "           name: 'TyAdminVerify',",
        "           icon: 'smile',",
        "           path: '/xadmin/sys/ty_admin_email_verify_record',",
        "           component: './TyAdminBuiltIn/TyAdminEmailVerifyRecordList'",
        "        }",
        "    ]",
        "}"]))

    password_routes = '\n'.join([
        "  {",
        "      name: 'passwordModify',",
        "      path: '/xadmin/account/change_password',",
        "      hideInMenu: true,",
        "      icon: 'dashboard',",
        "      component: './TyAdminBuiltIn/ChangePassword',",
        "  }", ])

    not_found_route = '\n'.join([
        "  {",
        "      component: './404',",
        "  },",
    ])

    menu_string = ',\n'.join(group_route_list) + '\n]'
    menu_string = format_json_string(menu_string)

    group_route_list.append(password_routes)
    group_route_list.append(not_found_route)

    route_string = ',\n'.join(group_route_list) + '\n]'
    route_string = format_json_string(route_string)

    # Used for menu items loading from server side
    path = f'{settings.BASE_DIR}/tyadmin_api/menu.json'
    print(f'gen: {path}')
    with open(path, 'w', encoding='utf-8') as fw:
        fw.write(menu_string)

    # Used for frontend url route in config.js
    path = f'{settings.BASE_DIR}/tyadmin/config/routes.js'
    print(f'gen: {path}')
    with open(path, 'w', encoding='utf-8') as fw:
        fw.write(route_string)


if __name__ == '__main__':
    # name = input("请输入项目settings位置:")
    name = "tyadmin_demo.settings"
    gen_route(name, None)
