from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.decorators import action

from tyadmin_api.custom import XadminViewSet
from django.contrib.auth.models import Permission, Group
from django.contrib.contenttypes.models import ContentType
from users.models import UserMenu, UserRouter, UserProfile
from vms.models import DataCenters, Clusters, DataStores, NetworkAdapters, Dedicatedhosts, VirtualHosts
from assets.models import IDC, Hosts, HostGroup
from django_celery_beat.models import SolarSchedule, IntervalSchedule, ClockedSchedule, CrontabSchedule, PeriodicTasks, PeriodicTask

from tyadmin_api.auto_serializers import PermissionListSerializer, ContentTypeListSerializer, UserMenuSerializer, UserRouterSerializer, \
    UserProfileSerializer, DataCentersSerializer, ClustersSerializer, DataStoresSerializer, NetworkAdaptersSerializer, DedicatedhostsSerializer, \
    VirtualHostsSerializer, IDCSerializer, HostsSerializer, HostGroupSerializer, SolarScheduleSerializer, IntervalScheduleSerializer, \
    ClockedScheduleSerializer, CrontabScheduleSerializer, PeriodicTasksSerializer, PeriodicTaskSerializer, GroupListSerializer, \
    GroupCreateUpdateSerializer, Permission, PermissionCreateUpdateSerializer
from tyadmin_api.auto_filters import PermissionFilter, GroupFilter, ContentTypeFilter, UserMenuFilter, UserRouterFilter, UserProfileFilter, \
    DataCentersFilter, ClustersFilter, DataStoresFilter, NetworkAdaptersFilter, DedicatedhostsFilter, VirtualHostsFilter, IDCFilter, HostsFilter, \
    HostGroupFilter, SolarScheduleFilter, IntervalScheduleFilter, ClockedScheduleFilter, CrontabScheduleFilter, PeriodicTasksFilter, \
    PeriodicTaskFilter


class ContentTypeViewSet(XadminViewSet):
    serializer_class = ContentTypeListSerializer
    queryset = ContentType.objects.all()
    filter_class = ContentTypeFilter
    search_fields = ["app_label", "model"]



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
    queryset = Group.objects.all()
    filter_class = GroupFilter
    search_fields = ["name"]

    def get_serializer_class(self):
        if self.action == "list":
            return GroupListSerializer
        else:
            return GroupCreateUpdateSerializer


class UserMenuViewSet(XadminViewSet):
    serializer_class = UserMenuSerializer
    queryset = UserMenu.objects.all()
    filter_class = UserMenuFilter
    search_fields = ["path", "title", "icon"]


class UserRouterViewSet(XadminViewSet):
    serializer_class = UserRouterSerializer
    queryset = UserRouter.objects.all()
    filter_class = UserRouterFilter
    search_fields = ["path", "name", "title", "component"]


class UserProfileViewSet(XadminViewSet):
    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()
    filter_class = UserProfileFilter
    search_fields = ["password", "username", "first_name", "last_name", "email", "mobile", "name"]


class DataCentersViewSet(XadminViewSet):
    serializer_class = DataCentersSerializer
    queryset = DataCenters.objects.all()
    filter_class = DataCentersFilter
    search_fields = ["name", "cputotal", "cpuusage", "memtotal", "memusage", "datatotal", "datafree"]


class ClustersViewSet(XadminViewSet):
    serializer_class = ClustersSerializer
    queryset = Clusters.objects.all()
    filter_class = ClustersFilter
    search_fields = ["name", "cputotal", "cpuusage", "memtotal", "memusage", "datatotal", "datafree"]


class DataStoresViewSet(XadminViewSet):
    serializer_class = DataStoresSerializer
    queryset = DataStores.objects.all()
    filter_class = DataStoresFilter
    search_fields = ["name", "capacity", "freespace"]


class NetworkAdaptersViewSet(XadminViewSet):
    serializer_class = NetworkAdaptersSerializer
    queryset = NetworkAdapters.objects.all()
    filter_class = NetworkAdaptersFilter
    search_fields = ["name", "vlanid", "type"]


class DedicatedhostsViewSet(XadminViewSet):
    serializer_class = DedicatedhostsSerializer
    queryset = Dedicatedhosts.objects.all()
    filter_class = DedicatedhostsFilter
    search_fields = ["name", "conState", "powerState", "uuid", "cpumodel", "cputotal", "cpuusage", "memtotal", "memusage"]


class VirtualHostsViewSet(XadminViewSet):
    serializer_class = VirtualHostsSerializer
    queryset = VirtualHosts.objects.all()
    filter_class = VirtualHostsFilter
    search_fields = ["name", "ip", "conState", "powerState", "memtotal", "os", "cpuusage", "memusage", "store_usage"]


class IDCViewSet(XadminViewSet):
    serializer_class = IDCSerializer
    queryset = IDC.objects.all()
    filter_class = IDCFilter
    search_fields = ["name"]


class HostsViewSet(XadminViewSet):
    serializer_class = HostsSerializer
    queryset = Hosts.objects.all()
    filter_class = HostsFilter
    search_fields = ["hostname", "server_type", "status", "cpu_info", "os", "os_kernel", "memory", "disk", "desc"]


class HostGroupViewSet(XadminViewSet):
    serializer_class = HostGroupSerializer
    queryset = HostGroup.objects.all()
    filter_class = HostGroupFilter
    search_fields = ["name"]


class SolarScheduleViewSet(XadminViewSet):
    serializer_class = SolarScheduleSerializer
    queryset = SolarSchedule.objects.all()
    filter_class = SolarScheduleFilter
    search_fields = ["event"]


class IntervalScheduleViewSet(XadminViewSet):
    serializer_class = IntervalScheduleSerializer
    queryset = IntervalSchedule.objects.all()
    filter_class = IntervalScheduleFilter
    search_fields = ["period"]


class ClockedScheduleViewSet(XadminViewSet):
    serializer_class = ClockedScheduleSerializer
    queryset = ClockedSchedule.objects.all()
    filter_class = ClockedScheduleFilter
    search_fields = []


class CrontabScheduleViewSet(XadminViewSet):
    serializer_class = CrontabScheduleSerializer
    queryset = CrontabSchedule.objects.all().order_by('-pk')
    filter_class = CrontabScheduleFilter
    search_fields = ["minute", "hour", "day_of_week", "day_of_month", "month_of_year"]


class PeriodicTasksViewSet(XadminViewSet):
    serializer_class = PeriodicTasksSerializer
    queryset = PeriodicTasks.objects.all()
    filter_class = PeriodicTasksFilter
    search_fields = []


class PeriodicTaskViewSet(XadminViewSet):
    serializer_class = PeriodicTaskSerializer
    queryset = PeriodicTask.objects.all()
    filter_class = PeriodicTaskFilter
    search_fields = ["name", "task", "queue", "exchange", "routing_key"]
