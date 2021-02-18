from django.shortcuts import render, HttpResponse, redirect


def formDisplay(request):
    return render(request, "form.html")


def createUser(request):
    print("Got Post Info....................")
    print(request.POST)
    print("*********************************")
    name_from_form = request.POST['name']
    location_from_form = request.POST['location']
    language_from_form = request.POST['language']
    text_from_form = request.POST['text']
    print(name_from_form)
    print(location_from_form)
    print(language_from_form)
    print(text_from_form)
    print("*************************************")
    request.session['forminfo'] = request.POST

    return redirect("/success")


def success(request):

    return render(request, 'success.html')


# what a cookie looks like {} .. and empty dictionary
# reqestion.session['forminfo'] = [] is the key
