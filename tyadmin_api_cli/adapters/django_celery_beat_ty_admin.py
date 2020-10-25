from django.http import JsonResponse

from tyadmin_api.custom import MtyCustomExecView


class PeriodicTask_task(MtyCustomExecView):
    def get(self, request, *args, **kwargs):
        from django_celery_beat.admin import TaskSelectWidget
        ret = {}
        for one in TaskSelectWidget().choices:
            if one[0] != "":
                ret[one[0]]= one[1]
        return JsonResponse(ret)
