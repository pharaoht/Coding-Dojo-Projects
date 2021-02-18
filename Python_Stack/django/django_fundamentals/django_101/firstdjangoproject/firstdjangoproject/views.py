from django.http import JsonResponse
from django.shortcuts import render, HttpResponse, redirect


def index(request):
    return HttpResponse("this is the equivalent of app.route('/')!")


def index2(request):
    context = {
        "name": "Noelle",
        "favorite_color": "blue",
        "pets": ["bruce", "duke", "Neil"]
    }
    return render(request, 'index.html', context)


def index1(request):
    return render(request, "index2.html")


def create_user(request):
    print("Got Post Info....................")
    print(request.POST)
    name_from_form = request.POST['name']
    email_from_form = request.POST['email']
    print(name_from_form)
    print(email_from_form)
    context = {
        'name_form': name_from_form,
        'email_from_form': email_from_form,
    }

    return redirect("/success", context)


def some_function(request):
    if request.method == "GET":
        print("a GET request is being made to this route")
        print(request.GET)

        return render(request, "some_template.html")
    if request.method == "POST":
        print("a POST request is being made to this route")
        print(request.POST)
        val_from_field_one = request.POST["one"]
        val_from_field_two = request.POST["two"]

        return redirect("/")


def success(request):
    # this is the success route
    return render(request, "success.html")


def session(request):
    request.session = request.POST['name']
    request.session['counter'] = 100
# every functions first argument will be a request object
# In Django we will utilize the request.POST to access any form data that is submitted.


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

# Useful session methods:
# request.session['key']
# This will retrieve(get) the value associated with 'key'
# request.session['key'] = 'value'
# Set the value that will be stored by 'key' to 'value'
# 'key' in request.session
# Returns a boolean of whether a key is in session or not
# {{request.session.name}}
# Use dot notation(.) to access request.session keys from templates since square brackets([]) aren’t allowed there
# del request.session['key']
# Deletes a session key if it exists, throws a KeyError if it doesn’t. Use along with try and except since it's better to ask for forgiveness than permission
# Note: If you are storing a list in session that is being modified(such as an append), you will need to save the session after the append, like so:
# request.session['my_list'] = []
# request.session['my_list'].append("new item")
# request.session.save()
