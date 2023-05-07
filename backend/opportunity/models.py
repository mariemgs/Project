from django.contrib.auth.models import User
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class Stage(models.Model):
    name = models.CharField(max_length=255)
    isWinStage = models.BooleanField()
    def __str__(self) -> str:
        return self.name
    

class Opportunity(models.Model):
    HIGH = 'high'
    MEDIUM = 'medium'
    LOW = 'low'
    PRIORITY_CHOICES = (
        ( HIGH , 'High'),
        (MEDIUM , 'Medium'),
        (LOW , 'Low'),
    )
  


    name = models.CharField(max_length=255)
    contact_person = models.CharField(max_length=255)
    description = models.TextField()
    email = models.EmailField 
    phone_number = PhoneNumberField(blank=True)
    URL = models.CharField(max_length=255, blank = True, null = True)
    pub_date = models.DateField()
    deadline = models.DateField()
    type_opp = models.CharField(max_length=255)
    estimated_price = models.FloatField()
    created_by = models.ForeignKey(User, related_name = 'Opportunities', on_delete = models.CASCADE)
    Priority = models.CharField(max_length = 255 , choices = PRIORITY_CHOICES, default = LOW) 
    created_at = models.DateTimeField(auto_now_add = True)
    stage = models.ForeignKey(Stage, related_name = 'Opportunitie', on_delete = models.CASCADE,null=True)
    

