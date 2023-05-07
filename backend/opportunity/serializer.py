from rest_framework import serializers 
from .models import Opportunity
from .models import Stage


class StageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stage
        fields = (
            'id',
            'name',
            'isWinStage',
         
        )


class OpportunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Opportunity
        read_only_fields = (
            'created_by',
            'created_at',



        ),
        fields = (
            'id',
            'name',
            'contact_person',
            'description',
            'email',
            'URL',
            'pub_date',
            'phone_number',
            'deadline',
            'type_opp',
            'estimated_price',
            'Priority',
            'stage',
        )