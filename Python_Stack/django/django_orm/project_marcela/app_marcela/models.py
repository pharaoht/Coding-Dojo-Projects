from django.db import models
import re
import bcrypt
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
        elif not EMAIL_REGEX.match(formInfo['email']):
            errors['emailnotmatch'] = 'Invalid email'
        elif len(emailChecker) > 0:
            errors['emailtaken'] = 'Sorry, that email is already resgistered'

        if len(formInfo['password']) == 0:
            errors['passworcheck'] = "A password is required"
        elif len(formInfo['password']) < 8:
            errors['passwordlengthcheck'] = "Password must be 8 characters long"

        if formInfo['password'] != formInfo['cpassword']:
            errors['psmatch'] = "Your Password must be the same as confirmed password"

        return errors

    def login_validator(self, formInfo):
        errors = {}
        emailChecker = User.objects.filter(email=formInfo['email'])

        if len(formInfo['email']) == 0:
            errors['emallencheck'] = "Email field can not be empty"

        elif len(emailChecker) == 0:
            errors['emailcheck'] = "Sorry that email, could not be found."

        if len(formInfo['password']) == 0:
            errors['passwordcheck'] = "Password field can not be empty"

        if len(emailChecker) != 0:
            if not bcrypt.checkpw(formInfo['password'].encode(),  emailChecker[0].password.encode()):
                errors['errorpassword'] = "Incorrect password"

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
    created_at = models.DateTimeField(auto_now_add=True, null=True)
