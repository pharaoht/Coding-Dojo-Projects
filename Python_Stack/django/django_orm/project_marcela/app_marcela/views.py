from django.shortcuts import render, redirect
from django.contrib import messages
import bcrypt
from .models import *
from datetime import date
# Create your views here.


def landingPage(request):
    return render(request, 'landing-page.html')


def login(request):
    print("*******landin***************")
    print("**********landin************")
    print("*************landin*********")
    return render(request, 'login.html')


def registerUser(request):
    errors = User.objects.register_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/login')

    hash1 = bcrypt.hashpw(
        request.POST['password'].encode(), bcrypt.gensalt()).decode()

    newUser = User.objects.create(
        user_name=request.POST['username'], email=request.POST['email'], password=hash1)

    request.session['loggedInUser'] = newUser.id

    return redirect('/home')


def loginUser(request):
    errors = User.objects.login_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/login')

    matchingEmail = User.objects.filter(email=request.POST['email'])
    user = request.session['loggedInUser'] = matchingEmail[0].id

    return redirect('/home')


def logout(request):
    request.session.clear()
    return redirect('/')


def home(request):
    if 'loggedInUser' not in request.session:
        messages.error(request, "You must be logged in to view that Page")
        return redirect('/login')

    context = {
        'allposts': Post.objects.all().order_by("-created_at"),
        'user': User.objects.get(id=request.session['loggedInUser'])
    }
    return render(request, 'home.html', context)


def createPost(request):
    today = date.today()
    Post.objects.create(title=request.POST['title'], img=request.POST['img'],
                        posted_at=today, desc=request.POST['desc'], posted_by=User.objects.get(id=request.session['loggedInUser']))
    return redirect('/home')


def socials(request):
    return render(request, 'socials.html')


def about(request):
    return render(request, 'about.html')


def likePost(request, userID):

    return redirect('/home')


def deletePost(request, postID):
    post = Post.objects.get(id=postID)
    post.delete()
    return redirect('/home')
