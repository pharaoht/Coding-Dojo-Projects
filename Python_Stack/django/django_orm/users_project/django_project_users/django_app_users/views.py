from django.shortcuts import render, HttpResponse, redirect
from .models import Users


def index(request):
    context = {
        "all_users": Users.objects.all()
    }
    return render(request, "index.html", context)


def adduser(request):
    print("**************")
    print(request.POST)
    Users.objects.create(
        first_name=request.POST['first_name'], last_name=request.POST['last_name'], email_address=request.POST['email_address'], age=request.POST['age'])

    return redirect('/')
