from django.urls import path
from . import views

urlpatterns = [
    path('', views.landingPage),
    path('login', views.login),
    path('home', views.home)
]
