from django.shortcuts import render, redirect
from django.contrib import messages
import bcrypt
from .models import *
from datetime import date
# Create your views here.


def landingPage(request):
    return render(request, 'landing-page.html')


def registerUser(request):

    return redirect('/home')


def login(request):

    return render(request, 'login.html')


def logout(request):

    return redirect('/')


def home(request):
    context = {
        'allposts': Post.objects.all()
    }
    return render(request, 'home.html', context)


def createPost(request):
    today = date.today()
    Post.objects.create(title=request.POST['title'], img=request.POST['img'],
                        posted_at=today, desc=request.POST['desc'], posted_by=User.obejcts.get(id=request.session['']))
    return redirect('/home')


def deletePost(request):

    return redirect('/home')
