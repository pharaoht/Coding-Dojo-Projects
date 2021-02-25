from django.shortcuts import render, redirect
from django.contrib import messages
import bcrypt
from .models import User


# Create your views here.


def index(request):
    return render(request, 'index.html')


def regPOST(request):

    errorsvalidate = User.objects.user_validator(request.POST)
    if len(errorsvalidate) > 0:
        for key, value in errorsvalidate.items():
            messages.error(request, value)
        return redirect('/')

    hash1 = bcrypt.hashpw(
        request.POST['password'].encode(), bcrypt.gensalt()).decode()

    newUser = User.objects.create(first_name=request.POST['fname'], last_name=request.POST['lname'],
                                  email=request.POST['email'], pasword=hash1)

    request.session['loggedInUserId'] = newUser.id

    return redirect('/status')


def status(request):
    if 'loggedInUserId' not in request.session:
        return redirect('/')

    context = {
        'user': User.objects.get(id=request.session['loggedInUserId'])
    }
    return render(request, 'status.html', context)


def logout(request):
    request.session.clear()
    return redirect('/')
