from django.db import models

# Create your models here.


class UserManager(models.Manager):
    errors = {}
    pass


class PostManager(models.Manager):
    pass


class User(models.Model):
    user_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)


class Post(models.Model):
    title = models.CharField(max_length=255)
    img = models.CharField(max_length=255)
    posted_at = models.DateField()
    desc = models.TextField()
    posted_by = models.ForeignKey(
        User, related_name="uploader", on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(User, related_name='likes')
