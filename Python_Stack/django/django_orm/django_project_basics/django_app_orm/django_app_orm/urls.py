from django.urls import path
from . import views

urlpatterns = [
    path('', views.index)
]


# python manage.py startapp your_name_of_app

# python manage.py makemigrations

# python manage.py migrate


# CharField
# Any text that a user may enter. This has one required parameter, max_length, that is the maximum length of text that can be saved.
# TextField
# Like a CharField, but with no maximum length. Your user could copy the entire text of the Harry Potter series into the field and it would save in the database correctly.
# IntegerField
# Holds an integer value
# FloatField
# Holds a float value
# this is good for numbers with potentially varying numbers of decimal places
# DecimalField
# This is a good field for a number with a fixed number of decimal places, like currency. There are 2 required parameters: max_digits refers to the total number of digits(before and after the decimal place), and decimal_places refers to how many decimal places.
# BooleanField
# Holds a boolean value
# DateTimeField
# Used for a combination of a specific date and time. This field can take two very useful optional parameters. Setting the auto_now_add argument to True adds the current date/time when an object is created. Setting auto_now =True automatically updates any time the object is modified.
