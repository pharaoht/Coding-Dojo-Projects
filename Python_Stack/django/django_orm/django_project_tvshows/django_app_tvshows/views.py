from django.shortcuts import render, redirect
from datetime import datetime
from .models import Show
from django.contrib import messages
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
    errors = Show.objects.basic_validator(request.POST)

    # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
            print(messages)
        # redirect the user back to the form to fix the errors
        return redirect(f'/edit/{showId}')
    # else:
    #     now = datetime.now()
    #     show = Show.objects.get(id=showId)
    #     show.title = request.POST['title']
    #     show.network = request.POST['network']
    #     show.release_date = request.POST['rdate']
    #     show.desc = request.POST['desc']
    #     show.save()
    #     print("*************")
    #     print("****************")
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
