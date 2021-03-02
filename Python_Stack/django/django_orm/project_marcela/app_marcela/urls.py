from django.urls import path
from . import views

urlpatterns = [
    path('', views.landingPage),
    path('login', views.login),
    path('registerUser', views.registerUser),
    path('home', views.home),
    path('createPost', views.createPost)
]
