from django.http import JsonResponse
from django.shortcuts import render, HttpResponse, render


def index(request):
    return HttpResponse("this is the equivalent of app.route('/')!")


def index2(request):
    context = {
        "name": "Noelle",
        "favorite_color": "blue",
        "pets": ["bruce", "duke", "Neil"]
    }
    return render(request, 'index.html', context)


# every functions first argument will be a request object
#


# urlpatterns = [
    # path('bears', views.one_method),  # would only match localhost:8000/bears
    # would match localhost:8000/bears/23

    # path('bears/<int:my_val>', views.another_method),
    # would match localhost:8000/bears/pooh/poke

    # path('bears/<str:name>/poke', views.yet_another),
    # would match localhost:8000/17/brown

    # path('<int:id>/<str:color>', views.one_more),


# this would be in views.py
# def one_method(request):  # no values passed via URL
  # pass                                 


# def another_method(request, my_val):  # my_val would be a number from the URL
 #   pass # given the example above, my_val would be 23


# def yet_another(request, name):   name would be a string from the URL


# pass   given the example above, name would be 'pooh'


# def one_more(request, id, color): 	# id would be a number, and color a string from the URL
    # given the example above, id would be 17 and color would be 'brown'
#    pass


# def root_method(request):
#    return HttpResponse("String response from root_method")


# def another_method(request):
#    return redirect("/redirected_route")


# def redirected_method(request):
#    return JsonResponse({"response": "JSON response from redirected_method", "status": True})
