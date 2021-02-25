from django.db import models

# Create your models here.


class ShowManager(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['title']) == 0:
            errors["titlerror"] = "Title is required"
        if len(postData['network']) == 0:
            errors["networkerror"] = "Network is required"
        if len(postData['rdate']) == 0:
            errors['rdaterror'] = 'Date is required'
        return errors


class Show(models.Model):
    title = models.CharField(max_length=255)
    network = models.CharField(max_length=255)
    desc = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now_add=True, null=True)
    objects = ShowManager()
