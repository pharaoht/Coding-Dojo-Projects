from django.db import models
from datetime import date
import re
# Create your models here.


class UserManager(models.Manager):
    def user_validator(self, formInfo):
        errors = {}
        today = date.today()
        EMAIL_REGEX = re.compile(
            r'[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

        IsEmailTaken = User.objects.filter(email=formInfo['email'])

        if len(formInfo['fname']) == 0:
            errors['fnamecheck'] = "Firstname is required"
        elif len(formInfo['fname']) < 2:
            errors['fnamleng'] = "Firstname must be at least 2 characters"

        if len(formInfo['lname']) == 0:
            errors['namsecheck'] = "Lastname is required"
        elif len(formInfo['lname']) < 2:
            errors['nameschelast'] = "Lastname must be at least 2 characters"

        if len(formInfo['email']) == 0:
            errors['emailcheck'] = "A valid email address is required"
        elif not EMAIL_REGEX.match(formInfo['email']):
            errors['emailnotmatch'] = 'Invalid email'
        elif len(IsEmailTaken) > 0:
            errors['emailtaken'] = 'Sorry, that email is already resgistered'

        if len(formInfo['password']) == 0:
            errors['passworcheck'] = "A password is required"
        elif len(formInfo['password']) < 8:
            errors['passwordlengthcheck'] = "Password must be 8 characters long"

        if formInfo['password'] != formInfo['confirmpassword']:
            errors['psmatch'] = "Your Password must be the same as confirmed password"

        # if len(formInfo['birthday']) == 0:
           # errors['birthdaycheck'] = "Birthday is required"
        # elif formInfo['birthday'] < str(today):
            #errors['futureerror'] = "Birthday can not be in the future"

        return errors


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    pasword = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    objects = UserManager()
