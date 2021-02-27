from django.shortcuts import render, redirect
from django.contrib import messages
import bcrypt
from .models import *
# Create your views here.


def index(request):
    return render(request, 'index.html')


def registerUser(request):
    errors = User.objects.register_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')

    User.objects.create(first_name=request.POST['fname'], last_name=request.POST['lname'],
                        email=request.POST['email'], password=request.POST['password'])

    userEmail = User.objects.filter(email=request.POST['email'])
    request.session['loggedinUser'] = userEmail[0].id

    return redirect('/quotes')


def loginUser(request):
    errors = User.objects.login_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')

    userEmail = User.objects.filter(email=request.POST['email'])
    request.session['loggedinUser'] = userEmail[0].id

    return redirect('/quotes')


def displayQuotes(request):

    if 'loggedinUser' not in request.session:
        messages.error(request, "You must be logged in to view that Page")
        return redirect('/')

    context = {
        'allposts': Quote.objects.all(),
        'user': User.objects.get(id=request.session['loggedinUser'])
    }
    return render(request, 'quotes.html', context)


def addQuote(request):
    errors = Quote.objects.post_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/quotes')

    Quote.objects.create(
        author=request.POST['author'], quote=request.POST['desc'], posted_by=User.objects.get(id=request.session['loggedinUser']))
    return redirect('/quotes')


def userQuotes(request, userID):
    if 'loggedinUser' not in request.session:
        messages.error(request, "You must be logged in to view that Page")
        return redirect('/')

    context = {
        'userposts': Quote.objects.filter(posted_by=userID),
        'userdata': User.objects.get(id=userID),
        'user': User.objects.get(id=request.session['loggedinUser'])
    }
    return render(request, 'quoteUser.html', context)


def logout(request):
    request.session.clear()
    return redirect('/')


def editAccount(request, userID):
    c = User.objects.get(id=request.session['loggedinUser'])
    if userID != c.id:
        return redirect("/quotes")

    context = {
        'userdata': User.objects.get(id=userID)
    }
    return render(request, 'account.html', context)


def updateAccount(request, userID):

    errors = User.objects.updateAccount_validator(request.POST)

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f'/editaccount/{userID}')

    c = User.objects.get(id=userID)
    c.first_name = request.POST['fname']
    c.last_name = request.POST['lname']
    c.email = request.POST['email']
    c.save()
    return redirect("/quotes")


def delete(request, quoteID):
    c = Quote.objects.get(id=quoteID)
    c.delete()
    return redirect("/quotes")
