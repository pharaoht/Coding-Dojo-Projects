from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('author', views.author),
    path('author/create', views.createauthor),
    path('author/add', views.addauthor),
    path('author/<int:authorId>', views.displayauthor),
    path('book/create', views.createbook),
    path('book/add', views.addbook),
    path('book/<int:bookId>', views.displaybook)
]
