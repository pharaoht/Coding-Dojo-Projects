
from django.urls import path
from . import views
# the . indicates that the views file can be found in the same directory as this file
urlpatterns = [
    path('', views.index),
    path('form', views.some_function),
    path('app', views.index1),
    path('users', views.create_users),
    path('success', views.success)

    #path('another_route', views.another_method),
    # path('redirected_route', views.redirected_method
]
# '' - the rest of the route both starts and ends with nothing (i.e. "/" is the full route), and

# views.index - if the requested route matches this pattern, then the function with the name "index" from this app's views.py file will be invoked.

# if the route wants a views.index function, then we'd better have one:
