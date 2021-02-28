from django.shortcuts import render

# Create your views here.


def landingPage(request):
    return render(request, 'landing-page.html')


def login(request):
    return render(request, 'login.html')
