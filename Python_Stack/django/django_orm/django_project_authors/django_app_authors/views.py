from django.shortcuts import render, HttpResponse, redirect
from .models import *

# Create your views here.


def index(request):
    context = {
        "allbooks": Book.objects.all()

    }
    return render(request, "books.html", context)


def author(request):
    context = {
        'allauthors': Author.objects.all()
    }

    return render(request, 'author.html', context)


def createbook(request):
    Book.objects.create(title=request.POST['title'], desc=request.POST['desc'])
    return redirect('/')


def createauthor(request):
    Author.objects.create(
        name=request.POST['name'], notes=request.POST['notes'])
    return redirect('/author')


def displayauthor(request, authorId):
    context = {
        'author': Author.objects.get(id=authorId),
        'books': Book.objects.all()
    }
    return render(request, 'displayauthor.html', context)


def displaybook(request, bookId):
    context = {
        'author': Author.objects.all(),
        'books': Book.objects.get(id=bookId)
    }
    return render(request, 'displaybook.html', context)


def addbook(request):
    aid = request.POST['authoradd']
    this_book = Book.objects.get(id=request.POST['bookchoice'])
    this_author = Author.objects.get(id=request.POST['authoradd'])
    print(this_author, this_book)
    this_author.books.add(this_book)
    return redirect(f'/author/{aid}')


def addauthor(request):
    bid = request.POST['bookid']
    aid = request.POST['authorname']
    print("*********************")
    print(aid)
    this_book = Book.objects.get(id=request.POST['bookid'])
    this_author = Author.objects.get(id=request.POST['authorname'])
    this_book.publish.add(this_author)
    return redirect(f'/book/{bid}')
