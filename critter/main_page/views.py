from django.http import HttpResponse
from django.http.response import JsonResponse
import requests
from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')
 
def test(request):
    # response = HttpResponse({'text is the beach in this bitch'})
    # return response

    # print(a)
    # return HttpResponse(index.html)
    # context = {'list': 'cold'}
    # return render(request, 'index.html', context)
    return JsonResponse({'text': 'hello moiz'})
    