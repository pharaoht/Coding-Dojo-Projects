from django.shortcuts import render, HttpResponse, redirect


def root(request):
    return redirect("/blog")


def blog(request):
    return HttpResponse("place holder to later display blogs")


def new(request):
    return HttpResponse("placeholder to display a new form to create blog")


def create(request):
    return redirect('')


def show(request, number):
    return HttpResponse(f"place holder to display blog number: {number}")


def edit(request, number):
    return HttpResponse(f"place holder to edit blog {number}")


def destroy(request, number):
    return redirect('/blog')
