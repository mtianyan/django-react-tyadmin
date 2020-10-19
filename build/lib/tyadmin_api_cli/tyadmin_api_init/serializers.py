from rest_framework import serializers

from tyadmin_api.models import TyAdminSysLog, TyAdminEmailVerifyRecord


class TyAdminSysLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = TyAdminSysLog
        fields = "__all__"


class TyAdminEmailVerifyRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = TyAdminEmailVerifyRecord
        fields = "__all__"
