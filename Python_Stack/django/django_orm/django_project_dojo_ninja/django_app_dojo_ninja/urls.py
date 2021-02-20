from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('add-dojo', views.addDojo),
    path('add-ninja', views.addNinja)
]
