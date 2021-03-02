from django.db import models
import re
# Create your models here.


class UserManager(models.Manager):
    def register_validator(self, formInfo):
        errors = {}
        EMAIL_REGEX = re.compile(
            r'[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        emailChecker = User.objects.filter(email=formInfo['email'])

        if len(formInfo['username']) == 0:
            errors['usernamelenCheck'] = "User name field is required"
        elif len(formInfo['username']) < 4:
            errors['usernamelenCheck2'] = "User name my be at least 4 characters"

        if len(formInfo['email']) == 0:
            errors['emailLenCheck'] = "Email field is required"

        return errors


class PostManager(models.Manager):
    pass


class User(models.Model):
    user_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    objects = UserManager()


class Post(models.Model):
    title = models.CharField(max_length=255)
    img = models.CharField(max_length=255)
    posted_at = models.DateField()
    desc = models.TextField()
    posted_by = models.ForeignKey(
        User, related_name="uploader", on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(User, related_name='likes')
