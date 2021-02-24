from django.shortcuts import render, redirect
from datetime import datetime
from .models import Show
from django.db import models

# Create your views here.


def allshows(request):
    context = {
        'allshows': Show.objects.all()
    }
    return render(request, "allshows.html", context)


def aboutshow(request, showId):
    context = {
        'this_show': Show.objects.get(id=showId)
    }
    return render(request, "about.html", context)


def editshowDISPLAY(request, showId):
    context = {
        'this_show': Show.objects.get(id=showId)
    }
    return render(request, "edit.html", context)


def editshowPOST(request, showId):
    now = datetime.now()
    show = Show.objects.get(id=showId)
    show.title = request.POST['title']
    show.network = request.POST['network']
    show.release_date = request.POST['rdate']
    show.desc = request.POST['desc']
    show.save()
    return redirect('/')


def addnewshowDISPLAY(request):
    return render(request, 'new.html')


def addnewPOST(request):
    Show.objects.create(title=request.POST['title'], network=request.POST['network'],
                        release_date=request.POST['rdate'], desc=request.POST['desc'])
    return redirect('/')


def deleteshow(request, showId):
    c = Show.objects.get(id=showId)
    c.delete()
    return redirect('/')
