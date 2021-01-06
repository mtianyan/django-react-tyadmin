from tyadmin_api import auto_views
from django.urls import re_path, include, path
from rest_framework.routers import DefaultRouter
    
router = DefaultRouter(trailing_slash=False)
    
router.register('permission', auto_views.PermissionViewSet)
    
router.register('group', auto_views.GroupViewSet)
    
router.register('content_type', auto_views.ContentTypeViewSet)
    
router.register('demo_foreign_key', auto_views.DemoForeignKeyViewSet)
    
router.register('tags', auto_views.TagsViewSet)
    
router.register('category', auto_views.CategoryViewSet)
    
router.register('rich_text_demo', auto_views.RichTextDemoViewSet)
    
router.register('demo_model_require', auto_views.DemoModelRequireViewSet)
    
router.register('demo_model', auto_views.DemoModelViewSet)
    
router.register('demo_default_model', auto_views.DemoDefaultModelViewSet)
    
router.register('user_profile', auto_views.UserProfileViewSet)
    
urlpatterns = [
        re_path('^', include(router.urls)),
    ]
    