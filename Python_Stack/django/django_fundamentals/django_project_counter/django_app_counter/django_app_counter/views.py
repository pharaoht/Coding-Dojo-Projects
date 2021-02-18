from django.shortcuts import render, HttpResponse, redirect


def home(request):
    context = {
        "counter": 0
    }

    request.session['new'] = context

    return render(request, "home.html")


def new(request):

    if 'counter' in request.session:
        request.session['counter'] += 1
        print("***************new*******")
        print(request.session['counter'])
    return render(request, 'index.html')


def destroy(request):
    del request.session['key']
    return redirect("home.html")
