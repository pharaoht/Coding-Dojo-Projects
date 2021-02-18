from django.urls import path
from . import views


urlpatterns = [
    path('', views.formDisplay),
    path('createUser', views.createUser),
    path('success', views.success)

]
