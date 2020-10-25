from rest_framework import serializers
from django.contrib.auth.models import Permission, Group
from django.contrib.contenttypes.models import ContentType
from users.models import UserMenu, UserRouter, UserProfile
from vms.models import DataCenters, Clusters, DataStores, NetworkAdapters, Dedicatedhosts, VirtualHosts
from assets.models import IDC, Hosts, HostGroup
from django_celery_beat.models import SolarSchedule, IntervalSchedule, ClockedSchedule, CrontabSchedule, PeriodicTasks, PeriodicTask


class ContentTypeListSerializer(serializers.ModelSerializer):
    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = ContentType
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class ContentTypeCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = ContentType
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class DataCentersListSerializer(serializers.ModelSerializer):
    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = DataCenters
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class DataCentersCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = DataCenters
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class HostsListSerializer(serializers.ModelSerializer):
    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Hosts
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class HostsCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Hosts
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class SolarScheduleListSerializer(serializers.ModelSerializer):
    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = SolarSchedule
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class SolarScheduleCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = SolarSchedule
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class IntervalScheduleListSerializer(serializers.ModelSerializer):
    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = IntervalSchedule
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class IntervalScheduleCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = IntervalSchedule
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class ClockedScheduleListSerializer(serializers.ModelSerializer):
    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = ClockedSchedule
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class ClockedScheduleCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = ClockedSchedule
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class CrontabScheduleListSerializer(serializers.ModelSerializer):
    timezone = serializers.CharField()

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = CrontabSchedule
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class CrontabScheduleCreateUpdateSerializer(serializers.ModelSerializer):
    timezone = serializers.CharField()
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = CrontabSchedule
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class PeriodicTasksListSerializer(serializers.ModelSerializer):
    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = PeriodicTasks
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class PeriodicTasksCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = PeriodicTasks
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class PermissionListSerializer(serializers.ModelSerializer):
    content_type = ContentTypeCreateUpdateSerializer()

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Permission
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class PermissionCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Permission
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class GroupListSerializer(serializers.ModelSerializer):
    permissions = PermissionCreateUpdateSerializer(many=True)

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Group
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class GroupCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Group
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class UserMenuSelfListSerializer(serializers.ModelSerializer):
    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = UserMenu
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class UserMenuListSerializer(serializers.ModelSerializer):
    parent = UserMenuSelfListSerializer()
    permission = PermissionCreateUpdateSerializer()

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = UserMenu
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class UserMenuCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = UserMenu
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class UserRouterListSerializer(serializers.ModelSerializer):
    permission = PermissionCreateUpdateSerializer()

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = UserRouter
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class UserRouterCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = UserRouter
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class UserProfileListSerializer(serializers.ModelSerializer):
    groups = GroupCreateUpdateSerializer(many=True)
    user_permissions = PermissionCreateUpdateSerializer(many=True)

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class UserProfileCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class ClustersListSerializer(serializers.ModelSerializer):
    datacenter = DataCentersCreateUpdateSerializer()

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Clusters
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class ClustersCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Clusters
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class DataStoresListSerializer(serializers.ModelSerializer):
    datacenter = DataCentersCreateUpdateSerializer()

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = DataStores
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class DataStoresCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = DataStores
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class NetworkAdaptersListSerializer(serializers.ModelSerializer):
    datacenter = DataCentersCreateUpdateSerializer()

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = NetworkAdapters
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class NetworkAdaptersCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = NetworkAdapters
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class DedicatedhostsListSerializer(serializers.ModelSerializer):
    cluster = ClustersCreateUpdateSerializer()
    datacenter = DataCentersCreateUpdateSerializer()
    network = NetworkAdaptersCreateUpdateSerializer(many=True)
    datastore = DataStoresCreateUpdateSerializer(many=True)

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Dedicatedhosts
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class DedicatedhostsCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Dedicatedhosts
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class VirtualHostsListSerializer(serializers.ModelSerializer):
    datacenter = DataCentersCreateUpdateSerializer()
    network = NetworkAdaptersCreateUpdateSerializer(many=True)

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = VirtualHosts
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class VirtualHostsCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = VirtualHosts
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class IDCListSerializer(serializers.ModelSerializer):
    servers = HostsCreateUpdateSerializer(many=True)

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = IDC
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class IDCCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = IDC
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class HostGroupListSerializer(serializers.ModelSerializer):
    host = HostsCreateUpdateSerializer(many=True)

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = HostGroup
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class HostGroupCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = HostGroup
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class PeriodicTaskListSerializer(serializers.ModelSerializer):
    interval = IntervalScheduleCreateUpdateSerializer()
    crontab = CrontabScheduleCreateUpdateSerializer()
    solar = SolarScheduleCreateUpdateSerializer()
    clocked = ClockedScheduleCreateUpdateSerializer()

    key = serializers.CharField(source="pk")
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = PeriodicTask
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class PeriodicTaskCreateUpdateSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = PeriodicTask
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)
