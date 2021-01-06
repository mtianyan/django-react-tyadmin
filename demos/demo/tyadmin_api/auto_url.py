from tyadmin_api import auto_views
from django.urls import re_path, include, path
from rest_framework.routers import DefaultRouter
    
router = DefaultRouter(trailing_slash=False)
    
router.register('permission', auto_views.PermissionViewSet)
    
router.register('group', auto_views.GroupViewSet)
    
router.register('user', auto_views.UserViewSet)
    
router.register('content_type', auto_views.ContentTypeViewSet)
    
urlpatterns = [
        re_path('^', include(router.urls)),
    ]
    