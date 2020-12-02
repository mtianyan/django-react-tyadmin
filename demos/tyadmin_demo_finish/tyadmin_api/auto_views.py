
from rest_framework import viewsets
from tyadmin_api.custom import XadminViewSet
from django.contrib.auth.models import Permission, Group
from django.contrib.contenttypes.models import ContentType
from demo.models import DemoForeignKey, Tags, Category, RichTextDemo, DemoModelRequire, DemoModel, DemoDefaultModel, UserProfile

from tyadmin_api.auto_serializers import PermissionListSerializer, GroupListSerializer, ContentTypeListSerializer, DemoForeignKeyListSerializer, TagsListSerializer, CategoryListSerializer, RichTextDemoListSerializer, DemoModelRequireListSerializer, DemoModelListSerializer, DemoDefaultModelListSerializer, UserProfileListSerializer
from tyadmin_api.auto_serializers import PermissionCreateUpdateSerializer, GroupCreateUpdateSerializer, ContentTypeCreateUpdateSerializer, DemoForeignKeyCreateUpdateSerializer, TagsCreateUpdateSerializer, CategoryCreateUpdateSerializer, RichTextDemoCreateUpdateSerializer, DemoModelRequireCreateUpdateSerializer, DemoModelCreateUpdateSerializer, DemoDefaultModelCreateUpdateSerializer, UserProfileCreateUpdateSerializer
from tyadmin_api.auto_filters import PermissionFilter, GroupFilter, ContentTypeFilter, DemoForeignKeyFilter, TagsFilter, CategoryFilter, RichTextDemoFilter, DemoModelRequireFilter, DemoModelFilter, DemoDefaultModelFilter, UserProfileFilter

    
class PermissionViewSet(XadminViewSet):
    serializer_class = PermissionListSerializer
    queryset = Permission.objects.all().order_by('-pk')
    filter_class = PermissionFilter
    search_fields = ["name","codename"]

    def get_serializer_class(self):
        if self.action == "list":
            return PermissionListSerializer
        else:
            return PermissionCreateUpdateSerializer

    
class GroupViewSet(XadminViewSet):
    serializer_class = GroupListSerializer
    queryset = Group.objects.all().order_by('-pk')
    filter_class = GroupFilter
    search_fields = ["name"]

    def get_serializer_class(self):
        if self.action == "list":
            return GroupListSerializer
        else:
            return GroupCreateUpdateSerializer

    
class ContentTypeViewSet(XadminViewSet):
    serializer_class = ContentTypeListSerializer
    queryset = ContentType.objects.all().order_by('-pk')
    filter_class = ContentTypeFilter
    search_fields = ["app_label","model"]

    def get_serializer_class(self):
        if self.action == "list":
            return ContentTypeListSerializer
        else:
            return ContentTypeCreateUpdateSerializer

    
class DemoForeignKeyViewSet(XadminViewSet):
    serializer_class = DemoForeignKeyListSerializer
    queryset = DemoForeignKey.objects.all().order_by('-pk')
    filter_class = DemoForeignKeyFilter
    search_fields = ["name"]

    def get_serializer_class(self):
        if self.action == "list":
            return DemoForeignKeyListSerializer
        else:
            return DemoForeignKeyCreateUpdateSerializer

    
class TagsViewSet(XadminViewSet):
    serializer_class = TagsListSerializer
    queryset = Tags.objects.all().order_by('-pk')
    filter_class = TagsFilter
    search_fields = ["code","name"]

    def get_serializer_class(self):
        if self.action == "list":
            return TagsListSerializer
        else:
            return TagsCreateUpdateSerializer

    
class CategoryViewSet(XadminViewSet):
    serializer_class = CategoryListSerializer
    queryset = Category.objects.all().order_by('-pk')
    filter_class = CategoryFilter
    search_fields = ["code","name"]

    def get_serializer_class(self):
        if self.action == "list":
            return CategoryListSerializer
        else:
            return CategoryCreateUpdateSerializer

    
class RichTextDemoViewSet(XadminViewSet):
    serializer_class = RichTextDemoListSerializer
    queryset = RichTextDemo.objects.all().order_by('-pk')
    filter_class = RichTextDemoFilter
    search_fields = ["name"]

    def get_serializer_class(self):
        if self.action == "list":
            return RichTextDemoListSerializer
        else:
            return RichTextDemoCreateUpdateSerializer

    
class DemoModelRequireViewSet(XadminViewSet):
    serializer_class = DemoModelRequireListSerializer
    queryset = DemoModelRequire.objects.all().order_by('-pk')
    filter_class = DemoModelRequireFilter
    search_fields = ["name"]

    def get_serializer_class(self):
        if self.action == "list":
            return DemoModelRequireListSerializer
        else:
            return DemoModelRequireCreateUpdateSerializer

    
class DemoModelViewSet(XadminViewSet):
    serializer_class = DemoModelListSerializer
    queryset = DemoModel.objects.all().order_by('-pk')
    filter_class = DemoModelFilter
    search_fields = ["char_field"]

    def get_serializer_class(self):
        if self.action == "list":
            return DemoModelListSerializer
        else:
            return DemoModelCreateUpdateSerializer

    
class DemoDefaultModelViewSet(XadminViewSet):
    serializer_class = DemoDefaultModelListSerializer
    queryset = DemoDefaultModel.objects.all().order_by('-pk')
    filter_class = DemoDefaultModelFilter
    search_fields = ["default_char_field"]

    def get_serializer_class(self):
        if self.action == "list":
            return DemoDefaultModelListSerializer
        else:
            return DemoDefaultModelCreateUpdateSerializer

    
class UserProfileViewSet(XadminViewSet):
    serializer_class = UserProfileListSerializer
    queryset = UserProfile.objects.all().order_by('-pk')
    filter_class = UserProfileFilter
    search_fields = ["password","username","first_name","last_name","email","gender"]

    def get_serializer_class(self):
        if self.action == "list":
            return UserProfileListSerializer
        else:
            return UserProfileCreateUpdateSerializer
