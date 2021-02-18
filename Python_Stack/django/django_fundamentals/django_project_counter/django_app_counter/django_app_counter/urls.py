from django.urls import path
from . import views

urlpatterns = [
    path('', views.home),
    path('index', views.new),
    path('destroy_session', views.destroy)
]
