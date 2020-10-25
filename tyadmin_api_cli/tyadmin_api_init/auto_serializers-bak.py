from rest_framework import serializers
from django.contrib.auth.models import Permission, Group
from django.contrib.contenttypes.models import ContentType
from users.models import UserMenu, UserRouter, UserProfile
from vms.models import DataCenters, Clusters, DataStores, NetworkAdapters, Dedicatedhosts, VirtualHosts
from assets.models import IDC, Hosts, HostGroup
from django_celery_beat.models import SolarSchedule, IntervalSchedule, ClockedSchedule, CrontabSchedule, PeriodicTasks, PeriodicTask


class ContentTypeListSerializer(serializers.ModelSerializer):
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = ContentType
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class PermissionListSerializer(serializers.ModelSerializer):
    key = serializers.CharField(source="pk")
    content_type = ContentTypeListSerializer()
    ty_options_display_txt = serializers.SerializerMethodField()

    class Meta:
        model = Permission
        fields = "__all__"

    @staticmethod
    def get_ty_options_display_txt(obj):
        return str(obj)


class PermissionCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Permission
        fields = "__all__"


class GroupListSerializer(serializers.ModelSerializer):
    permissions = PermissionListSerializer(many=True)

    class Meta:
        model = Group
        fields = "__all__"


class GroupCreateUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = "__all__"


class UserMenuSerializer(serializers.ModelSerializer):
    parent = serializers.StringRelatedField()
    permission = serializers.StringRelatedField()

    class Meta:
        model = UserMenu
        fields = "__all__"


class UserRouterSerializer(serializers.ModelSerializer):
    permission = serializers.StringRelatedField()

    class Meta:
        model = UserRouter
        fields = "__all__"


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = "__all__"


class DataCentersSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataCenters
        fields = "__all__"


class ClustersSerializer(serializers.ModelSerializer):
    datacenter = serializers.StringRelatedField()

    class Meta:
        model = Clusters
        fields = "__all__"


class DataStoresSerializer(serializers.ModelSerializer):
    datacenter = serializers.StringRelatedField()

    class Meta:
        model = DataStores
        fields = "__all__"


class NetworkAdaptersSerializer(serializers.ModelSerializer):
    datacenter = serializers.StringRelatedField()

    class Meta:
        model = NetworkAdapters
        fields = "__all__"


class DedicatedhostsSerializer(serializers.ModelSerializer):
    cluster = serializers.StringRelatedField()
    datacenter = serializers.StringRelatedField()

    class Meta:
        model = Dedicatedhosts
        fields = "__all__"


class VirtualHostsSerializer(serializers.ModelSerializer):
    datacenter = serializers.StringRelatedField()

    class Meta:
        model = VirtualHosts
        fields = "__all__"


class IDCSerializer(serializers.ModelSerializer):
    class Meta:
        model = IDC
        fields = "__all__"


class HostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hosts
        fields = "__all__"


class HostGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = HostGroup
        fields = "__all__"


class SolarScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = SolarSchedule
        fields = "__all__"


class IntervalScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = IntervalSchedule
        fields = "__all__"


class ClockedScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ClockedSchedule
        fields = "__all__"


class CrontabScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = CrontabSchedule
        fields = "__all__"


class PeriodicTasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = PeriodicTasks
        fields = "__all__"


class PeriodicTaskSerializer(serializers.ModelSerializer):
    interval = serializers.StringRelatedField()
    crontab = serializers.StringRelatedField()
    solar = serializers.StringRelatedField()
    clocked = serializers.StringRelatedField()

    class Meta:
        model = PeriodicTask
        fields = "__all__"
