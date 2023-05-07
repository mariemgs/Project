from django.shortcuts import render
from requests import request
from rest_framework import viewsets
from .models import Opportunity
from .models import Stage
from .serializer import OpportunitySerializer
from .serializer import StageSerializer
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticatedOrReadOnly




class OpportunityViewSet(viewsets.ModelViewSet):
    serializer_class = OpportunitySerializer
    queryset = Opportunity.objects.all

    def get_queryset(self):
        return self.queryset.filter(created_by=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class StageListAPIView(ListAPIView):
    serializer_class = StageSerializer
    queryset = Stage.objects.all 
    lookup_field = 'pk'
    permission_classes = (IsAuthenticatedOrReadOnly,)

    