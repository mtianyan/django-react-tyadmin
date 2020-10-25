from tyadmin_api import auto_views
from django.urls import re_path, include, path
from rest_framework.routers import DefaultRouter
    
router = DefaultRouter(trailing_slash=False)
    
router.register('permission/?', auto_views.PermissionViewSet)
    
router.register('group/?', auto_views.GroupViewSet)
    
router.register('content_type/?', auto_views.ContentTypeViewSet)
    
router.register('user_menu/?', auto_views.UserMenuViewSet)
    
router.register('user_router/?', auto_views.UserRouterViewSet)
    
router.register('user_profile/?', auto_views.UserProfileViewSet)
    
router.register('data_centers/?', auto_views.DataCentersViewSet)
    
router.register('clusters/?', auto_views.ClustersViewSet)
    
router.register('data_stores/?', auto_views.DataStoresViewSet)
    
router.register('network_adapters/?', auto_views.NetworkAdaptersViewSet)
    
router.register('dedicatedhosts/?', auto_views.DedicatedhostsViewSet)
    
router.register('virtual_hosts/?', auto_views.VirtualHostsViewSet)
    
router.register('i_d_c/?', auto_views.IDCViewSet)
    
router.register('hosts/?', auto_views.HostsViewSet)
    
router.register('host_group/?', auto_views.HostGroupViewSet)
    
router.register('solar_schedule/?', auto_views.SolarScheduleViewSet)
    
router.register('interval_schedule/?', auto_views.IntervalScheduleViewSet)
    
router.register('clocked_schedule/?', auto_views.ClockedScheduleViewSet)
    
router.register('crontab_schedule/?', auto_views.CrontabScheduleViewSet)
    
router.register('periodic_tasks/?', auto_views.PeriodicTasksViewSet)
    
router.register('periodic_task/?', auto_views.PeriodicTaskViewSet)
    
urlpatterns = [
        re_path('^', include(router.urls)),
    ]
    