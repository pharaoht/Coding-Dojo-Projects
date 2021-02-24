from django.urls import path
from . import views

urlpatterns = [
    path('', views.allshows),
    path('addnew/', views.addnewshowDISPLAY),
    path('newshow', views.addnewPOST),
    path('about/<int:showId>', views.aboutshow),
    path('edit/<int:showId>', views.editshowDISPLAY),
    path('editshow/<int:showId>', views.editshowPOST),
    path('delete/<int:showId>', views.deleteshow)

]
