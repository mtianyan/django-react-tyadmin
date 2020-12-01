// @ts-nocheck
import { ApplyPluginsType, dynamic } from '/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/node_modules/@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/xadmin/login",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/layouts/UserLayout'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "name": "login",
        "path": "/xadmin/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__UserLogin' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/TyAdminBuiltIn/UserLogin'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      }
    ]
  },
  {
    "path": "/xadmin/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__SecurityLayout' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/layouts/SecurityLayout'), loading: require('@/components/PageLoading/index').default}),
    "routes": [
      {
        "path": "/xadmin/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/layouts/BasicLayout'), loading: require('@/components/PageLoading/index').default}),
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "name": "首页",
            "path": "/xadmin/index",
            "icon": "dashboard",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__DashBoard' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/TyAdminBuiltIn/DashBoard'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "path": "/xadmin/",
            "redirect": "/xadmin/index",
            "exact": true
          },
          {
            "name": "首页",
            "path": "/xadmin/index",
            "icon": "dashboard",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__DashBoard' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/TyAdminBuiltIn/DashBoard'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "permission",
            "icon": "smile",
            "path": "/xadmin/permission",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__PermissionList' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/PermissionList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "group",
            "icon": "smile",
            "path": "/xadmin/group",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__GroupList' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/GroupList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "全部字段非必填[被外键关联]",
            "icon": "smile",
            "path": "/xadmin/demo_foreign_key",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__DemoForeignKeyList' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/DemoForeignKeyList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "标签[被多对多关联]",
            "icon": "smile",
            "path": "/xadmin/tags",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__TagsList' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/TagsList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "分类[被外键关联]",
            "icon": "smile",
            "path": "/xadmin/category",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__CategoryList' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/CategoryList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "富文本示例[关联外键，多对多标签]",
            "icon": "smile",
            "path": "/xadmin/rich_text_demo",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__RichTextDemoList' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/RichTextDemoList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "下拉选择示例(choices)",
            "icon": "smile",
            "path": "/xadmin/demo_model_require",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__DemoModelRequireList' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/DemoModelRequireList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "全部字段类型-必填",
            "icon": "smile",
            "path": "/xadmin/demo_model",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__DemoModelList' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/DemoModelList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "全部字段类型-提供默认值",
            "icon": "smile",
            "path": "/xadmin/demo_default_model",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__DemoDefaultModelList' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/DemoDefaultModelList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "用户管理",
            "icon": "smile",
            "path": "/xadmin/user_profile",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__AutoGenPage__UserProfileList' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/AutoGenPage/UserProfileList'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "Tyadmin内置",
            "icon": "VideoCamera",
            "path": "/xadmin/sys",
            "routes": [
              {
                "name": "TyAdmin日志",
                "icon": "smile",
                "path": "/xadmin/sys/ty_admin_sys_log",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__TyAdminSysLogList' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/TyAdminBuiltIn/TyAdminSysLogList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "TyAdmin验证",
                "icon": "smile",
                "path": "/xadmin/sys/ty_admin_email_verify_record",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__TyAdminEmailVerifyRecordList' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/TyAdminBuiltIn/TyAdminEmailVerifyRecordList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "path": "/xadmin/account/change_password",
            "name": "修改密码",
            "hideInMenu": true,
            "icon": "dashboard",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__ChangePassword' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/TyAdminBuiltIn/ChangePassword'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          },
          {
            "name": "Tyadmin内置",
            "icon": "VideoCamera",
            "path": "/xadmin/sys",
            "routes": [
              {
                "name": "TyAdmin日志",
                "icon": "smile",
                "path": "/xadmin/sys/ty_admin_sys_log",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__TyAdminSysLogList' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/TyAdminBuiltIn/TyAdminSysLogList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              },
              {
                "name": "TyAdmin验证",
                "icon": "smile",
                "path": "/xadmin/sys/ty_admin_email_verify_record",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__TyAdminBuiltIn__TyAdminEmailVerifyRecordList' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/TyAdminBuiltIn/TyAdminEmailVerifyRecordList'), loading: require('@/components/PageLoading/index').default}),
                "exact": true
              }
            ]
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
            "exact": true
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
        "exact": true
      }
    ]
  },
  {
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/mtianyan/tyRepos/tyadmin_api_cli/demos/tyadmin_demo_finish/tyadmin/src/pages/404'), loading: require('@/components/PageLoading/index').default}),
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
