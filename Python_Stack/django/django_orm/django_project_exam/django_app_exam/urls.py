from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('registerUser', views.registerUser),
    path('loginUser', views.loginUser),
    path('quotes', views.displayQuotes),
    path('addQuote', views.addQuote),
    path('userQuotes/<int:userID>', views.userQuotes),
    path('logout', views.logout),
    path('editaccount/<int:userID>', views.editAccount),
    path('updateaccount/<int:userID>', views.updateAccount),
    path('delete/<int:quoteID>', views.delete)

]
