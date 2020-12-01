[
    {
        name: '首页',
        path: '/xadmin/index',
        icon: 'dashboard',
        component: './TyAdminBuiltIn/DashBoard'
    },
    {
        name: 'auth',
        icon: 'BarsOutlined',
        path: '/xadmin/auth',
        routes:
        [
            {
                name: '权限',
                path: '/xadmin/permission',
                component: './AutoGenPage/PermissionList',
            },
            {
                name: '组',
                path: '/xadmin/group',
                component: './AutoGenPage/GroupList',
            },
            {
                name: '用户',
                path: '/xadmin/user',
                component: './AutoGenPage/UserList',
            }
        ]
    },
    {
        name: 'django_celery_beat',
        icon: 'BarsOutlined',
        path: '/xadmin/django_celery_beat',
        routes:
        [
            {
                name: 'solar event',
                path: '/xadmin/solar_schedule',
                component: './AutoGenPage/SolarScheduleList',
            },
            {
                name: 'interval',
                path: '/xadmin/interval_schedule',
                component: './AutoGenPage/IntervalScheduleList',
            },
            {
                name: 'clocked',
                path: '/xadmin/clocked_schedule',
                component: './AutoGenPage/ClockedScheduleList',
            },
            {
                name: 'crontab',
                path: '/xadmin/crontab_schedule',
                component: './AutoGenPage/CrontabScheduleList',
            },
            {
                name: 'periodic tasks',
                path: '/xadmin/periodic_tasks',
                component: './AutoGenPage/PeriodicTasksList',
            },
            {
                name: 'periodic task',
                path: '/xadmin/periodic_task',
                component: './AutoGenPage/PeriodicTaskList',
            }
        ]
    },
    {
        name: 'authtoken',
        icon: 'BarsOutlined',
        path: '/xadmin/authtoken',
        routes:
        [
            {
                name: '令牌',
                path: '/xadmin/token',
                component: './AutoGenPage/TokenList',
            },
            {
                name: 'token',
                path: '/xadmin/token_proxy',
                component: './AutoGenPage/TokenProxyList',
            }
        ]
    },
    {
        name: 'storage',
        icon: 'BarsOutlined',
        path: '/xadmin/storage',
        routes:
        [
            {
                name: 'nas',
                path: '/xadmin/nas',
                component: './AutoGenPage/NasList',
            }
        ]
    },
    {
        name: 'captcha',
        icon: 'BarsOutlined',
        path: '/xadmin/captcha',
        routes:
        [
            {
                name: 'captcha store',
                path: '/xadmin/captcha_store',
                component: './AutoGenPage/CaptchaStoreList',
            }
        ]
    },
    {
        name: 'Tyadmin内置',
        icon: 'VideoCamera',
        path: '/xadmin/sys',
        routes:
        [
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
    }
]
