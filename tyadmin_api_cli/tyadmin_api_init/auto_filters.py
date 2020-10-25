from django_filters import rest_framework as filters
from tyadmin_api.custom import DateFromToRangeFilter
from django.contrib.auth.models import Permission, Group
from django.contrib.contenttypes.models import ContentType
from users.models import UserMenu, UserRouter, UserProfile
from vms.models import DataCenters, Clusters, DataStores, NetworkAdapters, Dedicatedhosts, VirtualHosts
from assets.models import IDC, Hosts, HostGroup
from django_celery_beat.models import SolarSchedule, IntervalSchedule, ClockedSchedule, CrontabSchedule, PeriodicTasks, PeriodicTask


class PermissionFilter(filters.FilterSet):
    content_type_text = filters.CharFilter(field_name="content_type")

    class Meta:
        model = Permission
        exclude = []


class GroupFilter(filters.FilterSet):

    class Meta:
        model = Group
        exclude = []


class ContentTypeFilter(filters.FilterSet):

    class Meta:
        model = ContentType
        exclude = []


class UserMenuFilter(filters.FilterSet):
    parent_text = filters.CharFilter(field_name="parent")
    permission_text = filters.CharFilter(field_name="permission")

    class Meta:
        model = UserMenu
        exclude = []


class UserRouterFilter(filters.FilterSet):
    permission_text = filters.CharFilter(field_name="permission")

    class Meta:
        model = UserRouter
        exclude = []


class UserProfileFilter(filters.FilterSet):
    last_login = DateFromToRangeFilter(field_name="last_login")
    date_joined = DateFromToRangeFilter(field_name="date_joined")

    class Meta:
        model = UserProfile
        exclude = ["image","image"]


class DataCentersFilter(filters.FilterSet):
    ctime = DateFromToRangeFilter(field_name="ctime")
    utime = DateFromToRangeFilter(field_name="utime")

    class Meta:
        model = DataCenters
        exclude = []


class ClustersFilter(filters.FilterSet):
    datacenter_text = filters.CharFilter(field_name="datacenter")
    ctime = DateFromToRangeFilter(field_name="ctime")
    utime = DateFromToRangeFilter(field_name="utime")

    class Meta:
        model = Clusters
        exclude = []


class DataStoresFilter(filters.FilterSet):
    datacenter_text = filters.CharFilter(field_name="datacenter")
    ctime = DateFromToRangeFilter(field_name="ctime")
    utime = DateFromToRangeFilter(field_name="utime")

    class Meta:
        model = DataStores
        exclude = []


class NetworkAdaptersFilter(filters.FilterSet):
    datacenter_text = filters.CharFilter(field_name="datacenter")
    ctime = DateFromToRangeFilter(field_name="ctime")
    utime = DateFromToRangeFilter(field_name="utime")

    class Meta:
        model = NetworkAdapters
        exclude = []


class DedicatedhostsFilter(filters.FilterSet):
    cluster_text = filters.CharFilter(field_name="cluster")
    datacenter_text = filters.CharFilter(field_name="datacenter")
    ctime = DateFromToRangeFilter(field_name="ctime")
    utime = DateFromToRangeFilter(field_name="utime")

    class Meta:
        model = Dedicatedhosts
        exclude = []


class VirtualHostsFilter(filters.FilterSet):
    datacenter_text = filters.CharFilter(field_name="datacenter")
    ctime = DateFromToRangeFilter(field_name="ctime")
    utime = DateFromToRangeFilter(field_name="utime")

    class Meta:
        model = VirtualHosts
        exclude = []


class IDCFilter(filters.FilterSet):
    ctime = DateFromToRangeFilter(field_name="ctime")
    utime = DateFromToRangeFilter(field_name="utime")

    class Meta:
        model = IDC
        exclude = []


class HostsFilter(filters.FilterSet):
    ctime = DateFromToRangeFilter(field_name="ctime")
    utime = DateFromToRangeFilter(field_name="utime")

    class Meta:
        model = Hosts
        exclude = []


class HostGroupFilter(filters.FilterSet):
    ctime = DateFromToRangeFilter(field_name="ctime")
    utime = DateFromToRangeFilter(field_name="utime")

    class Meta:
        model = HostGroup
        exclude = []


class SolarScheduleFilter(filters.FilterSet):

    class Meta:
        model = SolarSchedule
        exclude = []


class IntervalScheduleFilter(filters.FilterSet):

    class Meta:
        model = IntervalSchedule
        exclude = []


class ClockedScheduleFilter(filters.FilterSet):
    clocked_time = DateFromToRangeFilter(field_name="clocked_time")

    class Meta:
        model = ClockedSchedule
        exclude = []


class CrontabScheduleFilter(filters.FilterSet):

    class Meta:
        model = CrontabSchedule
        exclude = ["timezone"]


class PeriodicTasksFilter(filters.FilterSet):
    last_update = DateFromToRangeFilter(field_name="last_update")

    class Meta:
        model = PeriodicTasks
        exclude = []


class PeriodicTaskFilter(filters.FilterSet):
    interval_text = filters.CharFilter(field_name="interval")
    crontab_text = filters.CharFilter(field_name="crontab")
    solar_text = filters.CharFilter(field_name="solar")
    clocked_text = filters.CharFilter(field_name="clocked")
    expires = DateFromToRangeFilter(field_name="expires")
    start_time = DateFromToRangeFilter(field_name="start_time")
    last_run_at = DateFromToRangeFilter(field_name="last_run_at")
    date_changed = DateFromToRangeFilter(field_name="date_changed")

    class Meta:
        model = PeriodicTask
        exclude = []