from rest_framework import viewsets
from tyadmin_api.custom import XadminViewSet
from django.contrib.auth.models import Permission, Group
from django.contrib.contenttypes.models import ContentType
from users.models import UserMenu, UserRouter, UserProfile
from vms.models import DataCenters, Clusters, DataStores, NetworkAdapters, Dedicatedhosts, VirtualHosts
from assets.models import IDC, Hosts, HostGroup
from django_celery_beat.models import SolarSchedule, IntervalSchedule, ClockedSchedule, CrontabSchedule, PeriodicTasks, PeriodicTask

from tyadmin_api.auto_serializers import PermissionListSerializer, GroupListSerializer, ContentTypeListSerializer, UserMenuListSerializer, \
    UserRouterListSerializer, UserProfileListSerializer, DataCentersListSerializer, ClustersListSerializer, DataStoresListSerializer, \
    NetworkAdaptersListSerializer, DedicatedhostsListSerializer, VirtualHostsListSerializer, IDCListSerializer, HostsListSerializer, \
    HostGroupListSerializer, SolarScheduleListSerializer, IntervalScheduleListSerializer, ClockedScheduleListSerializer, \
    CrontabScheduleListSerializer, PeriodicTasksListSerializer, PeriodicTaskListSerializer
from tyadmin_api.auto_serializers import PermissionCreateUpdateSerializer, GroupCreateUpdateSerializer, ContentTypeCreateUpdateSerializer, \
    UserMenuCreateUpdateSerializer, UserRouterCreateUpdateSerializer, UserProfileCreateUpdateSerializer, DataCentersCreateUpdateSerializer, \
    ClustersCreateUpdateSerializer, DataStoresCreateUpdateSerializer, NetworkAdaptersCreateUpdateSerializer, DedicatedhostsCreateUpdateSerializer, \
    VirtualHostsCreateUpdateSerializer, IDCCreateUpdateSerializer, HostsCreateUpdateSerializer, HostGroupCreateUpdateSerializer, \
    SolarScheduleCreateUpdateSerializer, IntervalScheduleCreateUpdateSerializer, ClockedScheduleCreateUpdateSerializer, \
    CrontabScheduleCreateUpdateSerializer, PeriodicTasksCreateUpdateSerializer, PeriodicTaskCreateUpdateSerializer
from tyadmin_api.auto_filters import PermissionFilter, GroupFilter, ContentTypeFilter, UserMenuFilter, UserRouterFilter, UserProfileFilter, \
    DataCentersFilter, ClustersFilter, DataStoresFilter, NetworkAdaptersFilter, DedicatedhostsFilter, VirtualHostsFilter, IDCFilter, HostsFilter, \
    HostGroupFilter, SolarScheduleFilter, IntervalScheduleFilter, ClockedScheduleFilter, CrontabScheduleFilter, PeriodicTasksFilter, \
    PeriodicTaskFilter


class PermissionViewSet(XadminViewSet):
    serializer_class = PermissionListSerializer
    queryset = Permission.objects.all().order_by('-pk')
    filter_class = PermissionFilter
    search_fields = ["name", "codename"]

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
    search_fields = ["app_label", "model"]

    def get_serializer_class(self):
        if self.action == "list":
            return ContentTypeListSerializer
        else:
            return ContentTypeCreateUpdateSerializer


class UserMenuViewSet(XadminViewSet):
    serializer_class = UserMenuListSerializer
    queryset = UserMenu.objects.all().order_by('-pk')
    filter_class = UserMenuFilter
    search_fields = ["path", "title", "icon"]

    def get_serializer_class(self):
        if self.action == "list":
            return UserMenuListSerializer
        else:
            return UserMenuCreateUpdateSerializer


class UserRouterViewSet(XadminViewSet):
    serializer_class = UserRouterListSerializer
    queryset = UserRouter.objects.all().order_by('-pk')
    filter_class = UserRouterFilter
    search_fields = ["path", "name", "title", "component"]

    def get_serializer_class(self):
        if self.action == "list":
            return UserRouterListSerializer
        else:
            return UserRouterCreateUpdateSerializer


class UserProfileViewSet(XadminViewSet):
    serializer_class = UserProfileListSerializer
    queryset = UserProfile.objects.all().order_by('-pk')
    filter_class = UserProfileFilter
    search_fields = ["password", "username", "first_name", "last_name", "email", "mobile", "name"]

    def get_serializer_class(self):
        if self.action == "list":
            return UserProfileListSerializer
        else:
            return UserProfileCreateUpdateSerializer


class DataCentersViewSet(XadminViewSet):
    serializer_class = DataCentersListSerializer
    queryset = DataCenters.objects.all().order_by('-pk')
    filter_class = DataCentersFilter
    search_fields = ["name", "cputotal", "cpuusage", "memtotal", "memusage", "datatotal", "datafree"]

    def get_serializer_class(self):
        if self.action == "list":
            return DataCentersListSerializer
        else:
            return DataCentersCreateUpdateSerializer


class ClustersViewSet(XadminViewSet):
    serializer_class = ClustersListSerializer
    queryset = Clusters.objects.all().order_by('-pk')
    filter_class = ClustersFilter
    search_fields = ["name", "cputotal", "cpuusage", "memtotal", "memusage", "datatotal", "datafree"]

    def get_serializer_class(self):
        if self.action == "list":
            return ClustersListSerializer
        else:
            return ClustersCreateUpdateSerializer


class DataStoresViewSet(XadminViewSet):
    serializer_class = DataStoresListSerializer
    queryset = DataStores.objects.all().order_by('-pk')
    filter_class = DataStoresFilter
    search_fields = ["name", "capacity", "freespace"]

    def get_serializer_class(self):
        if self.action == "list":
            return DataStoresListSerializer
        else:
            return DataStoresCreateUpdateSerializer


class NetworkAdaptersViewSet(XadminViewSet):
    serializer_class = NetworkAdaptersListSerializer
    queryset = NetworkAdapters.objects.all().order_by('-pk')
    filter_class = NetworkAdaptersFilter
    search_fields = ["name", "vlanid", "type"]

    def get_serializer_class(self):
        if self.action == "list":
            return NetworkAdaptersListSerializer
        else:
            return NetworkAdaptersCreateUpdateSerializer


class DedicatedhostsViewSet(XadminViewSet):
    serializer_class = DedicatedhostsListSerializer
    queryset = Dedicatedhosts.objects.all().order_by('-pk')
    filter_class = DedicatedhostsFilter
    search_fields = ["name", "conState", "powerState", "uuid", "cpumodel", "cputotal", "cpuusage", "memtotal", "memusage"]

    def get_serializer_class(self):
        if self.action == "list":
            return DedicatedhostsListSerializer
        else:
            return DedicatedhostsCreateUpdateSerializer


class VirtualHostsViewSet(XadminViewSet):
    serializer_class = VirtualHostsListSerializer
    queryset = VirtualHosts.objects.all().order_by('-pk')
    filter_class = VirtualHostsFilter
    search_fields = ["name", "ip", "conState", "powerState", "memtotal", "os", "cpuusage", "memusage", "store_usage"]

    def get_serializer_class(self):
        if self.action == "list":
            return VirtualHostsListSerializer
        else:
            return VirtualHostsCreateUpdateSerializer


class IDCViewSet(XadminViewSet):
    serializer_class = IDCListSerializer
    queryset = IDC.objects.all().order_by('-pk')
    filter_class = IDCFilter
    search_fields = ["name"]

    def get_serializer_class(self):
        if self.action == "list":
            return IDCListSerializer
        else:
            return IDCCreateUpdateSerializer


class HostsViewSet(XadminViewSet):
    serializer_class = HostsListSerializer
    queryset = Hosts.objects.all().order_by('-pk')
    filter_class = HostsFilter
    search_fields = ["hostname", "server_type", "status", "cpu_info", "os", "os_kernel", "memory", "disk", "desc"]

    def get_serializer_class(self):
        if self.action == "list":
            return HostsListSerializer
        else:
            return HostsCreateUpdateSerializer


class HostGroupViewSet(XadminViewSet):
    serializer_class = HostGroupListSerializer
    queryset = HostGroup.objects.all().order_by('-pk')
    filter_class = HostGroupFilter
    search_fields = ["name"]

    def get_serializer_class(self):
        if self.action == "list":
            return HostGroupListSerializer
        else:
            return HostGroupCreateUpdateSerializer


class SolarScheduleViewSet(XadminViewSet):
    serializer_class = SolarScheduleListSerializer
    queryset = SolarSchedule.objects.all().order_by('-pk')
    filter_class = SolarScheduleFilter
    search_fields = ["event"]

    def get_serializer_class(self):
        if self.action == "list":
            return SolarScheduleListSerializer
        else:
            return SolarScheduleCreateUpdateSerializer


class IntervalScheduleViewSet(XadminViewSet):
    serializer_class = IntervalScheduleListSerializer
    queryset = IntervalSchedule.objects.all().order_by('-pk')
    filter_class = IntervalScheduleFilter
    search_fields = ["period"]

    def get_serializer_class(self):
        if self.action == "list":
            return IntervalScheduleListSerializer
        else:
            return IntervalScheduleCreateUpdateSerializer


class ClockedScheduleViewSet(XadminViewSet):
    serializer_class = ClockedScheduleListSerializer
    queryset = ClockedSchedule.objects.all().order_by('-pk')
    filter_class = ClockedScheduleFilter
    search_fields = []

    def get_serializer_class(self):
        if self.action == "list":
            return ClockedScheduleListSerializer
        else:
            return ClockedScheduleCreateUpdateSerializer


class CrontabScheduleViewSet(XadminViewSet):
    serializer_class = CrontabScheduleListSerializer
    queryset = CrontabSchedule.objects.all().order_by('-pk')
    filter_class = CrontabScheduleFilter
    search_fields = ["minute", "hour", "day_of_week", "day_of_month", "month_of_year"]

    def get_serializer_class(self):
        if self.action == "list":
            return CrontabScheduleListSerializer
        else:
            return CrontabScheduleCreateUpdateSerializer


class PeriodicTasksViewSet(XadminViewSet):
    serializer_class = PeriodicTasksListSerializer
    queryset = PeriodicTasks.objects.all().order_by('-pk')
    filter_class = PeriodicTasksFilter
    search_fields = []

    def get_serializer_class(self):
        if self.action == "list":
            return PeriodicTasksListSerializer
        else:
            return PeriodicTasksCreateUpdateSerializer


class PeriodicTaskViewSet(XadminViewSet):
    serializer_class = PeriodicTaskListSerializer
    queryset = PeriodicTask.objects.all().order_by('-pk')
    filter_class = PeriodicTaskFilter
    search_fields = ["name", "task", "queue", "exchange", "routing_key"]

    def get_serializer_class(self):
        if self.action == "list":
            return PeriodicTaskListSerializer
        else:
            return PeriodicTaskCreateUpdateSerializer
