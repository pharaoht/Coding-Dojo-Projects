from django.db import models
import re
# Create your models here.


class UserManager(models.Manager):
    def register_validator(self, formInfo):
        errors = {}
        EMAIL_REGEX = re.compile(
            r'[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        emailChecker = User.objects.filter(email=formInfo['email'])

        if len(formInfo['fname']) == 0:
            errors['lenFNameCheck'] = "First Name field is required."
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
        elif len(emailChecker) > 0:
            errors['emailtaken'] = 'Sorry, that email is already resgistered'

        if len(formInfo['password']) == 0:
            errors['passworcheck'] = "A password is required"
        elif len(formInfo['password']) < 8:
            errors['passwordlengthcheck'] = "Password must be 8 characters long"

        if formInfo['password'] != formInfo['cfrnpassword']:
            errors['psmatch'] = "Your Password must be the same as confirmed password"

        return errors

    def login_validator(self, formInfo):
        errors = {}
        emailChecker = User.objects.filter(email=formInfo['email'])

        if len(emailChecker) == 0:
            errors['emailcheck'] = "Sorry that email, could not be found."

        if formInfo['password'] != emailChecker[0].password:
            errors['notmatch'] = "Sorry that is the wrong password."

        return errors

    def updateAccount_validator(self, formInfo):
        errors = {}
        EMAIL_REGEX = re.compile(
            r'[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        emailChecker = User.objects.filter(email=formInfo['email'])

        if len(formInfo['fname']) == 0:
            errors['lenFNameCheck'] = "First Name field is required."
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

        return errors


class QuoteManager(models.Manager):
    def post_validator(self, formInfo):
        errors = {}

        if len(formInfo['author']) < 3:
            errors['authorcheck'] = "Author field must have at least 3 characters"
        if len(formInfo['desc']) < 10:
            errors['descCheck'] = "Description field must be at least 10 characters"
        return errors


class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    objects = UserManager()


class Quote(models.Model):
    author = models.CharField(max_length=255)
    quote = models.TextField()
    posted_by = models.ForeignKey(
        User, related_name="uploader", on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(User, related_name="likes")
    created_at = models.DateTimeField(auto_now_add=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    objects = QuoteManager()
