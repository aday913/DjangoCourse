from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    my_dict = {
        'insert_me' : 'Hello I am from the views.py file!'
    }
    return render(request, 'AppTwo/index.html', context=my_dict)

def help(request):
    temp_dict = {
        'helpText' : 'This is the help page!'
    }
    return render(request, 'AppTwo/help.html', context=temp_dict)