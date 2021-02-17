from time import gmtime, strftime
from datetime import datetime

from django.shortcuts import render, HttpResponse


def index(request):
    now = datetime.now()
    context = {
        "time": now.strftime("%m/%d/%Y %H:%M:%S")
    }
    return render(request, 'index.html', context)
