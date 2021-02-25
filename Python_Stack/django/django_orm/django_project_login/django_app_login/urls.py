from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.regPOST),
    path('status', views.status),
    path('logout', views.logout)
]
