from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Opportunity(models.Model):
    HIGH = 'high'
    MEDIUM = 'medium'
    LOW = 'low'
    PRIORITY_CHOICES = (
        ( HIGH , 'High'),
        (MEDIUM , 'Medium'),
        (LOW , 'Low'),
    )
    NEW = 'new'
    CONTACTED = 'contacted'
    INPROGRESS = 'inprogress'
    LOST = 'lost'
    WON = 'won'
    STATE_CHOICES = (
        (NEW , 'New'),
        (CONTACTED, 'Contacted'),
        (INPROGRESS, 'In progress'), 
        (LOST, 'Lost'), 
        (WON, 'Won'),
    )
    
    prospect = models.CharField(max_length=255)
    description = models.TextField()
    pub_date = models.DateField()
    deadline = models.DateField()
    type = models.CharField(max_length=255)
    estimated_price = models.FloatField()
    state = models.CharField(max_length = 255, choices=STATE_CHOICES,default = NEW)
    Priority = models.CharField(max_length = 255 , choices = PRIORITY_CHOICES, default = LOW) 
