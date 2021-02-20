from django.shortcuts import render, HttpResponse, redirect
from .models import *

# Create your views here.


def index(request):
    context = {
        "alldojos": Dojo.objects.all()
    }
    print("************")
    print(context)
    return render(request, "index.html", context)


def addDojo(request):
    print("******")
    print(request.POST)

    Dojo.objects.create(
        name=request.POST['dojo_name'], city=request.POST['dojo_city'], state=request.POST['dojo_state'])
    return redirect("/")


def addNinja(request):
    print("******")
    print(request.POST)
    Ninja.objects.create(
        dojo_id=Dojo.objects.get(
            id=request.POST['dojo']), first_name=request.POST['f_name'], last_name=request.POST['l_name'])
    return redirect("/")
