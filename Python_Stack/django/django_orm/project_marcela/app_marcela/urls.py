from django.urls import path
from . import views

urlpatterns = [
    path('', views.landingPage),
    path('login', views.login),
    path('registerUser', views.registerUser),
    path('loginUser', views.loginUser),
    path('home', views.home),
    path('logout', views.logout),
    path('createPost', views.createPost),
    path('socials', views.socials),
    path('about', views.about),
    path('delete/<int:postID>', views.deletePost),
    path('like/<int:userID>', views.likePost)
]
