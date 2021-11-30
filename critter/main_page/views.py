import json
# from django.http import HttpResponse
from django.http.response import JsonResponse
# import requests
from django.shortcuts import render

# Create your views here.

def index(request):
    print("hi yalll")
    return render(request, 'index.html')
 
def test(request):
    print("hi momomiiii")
    if request.method == "GET":
        
        received_json_data=json.loads(request.body)
        print(received_json_data)
    # response = HttpResponse({'text is the beach in this bitch'})
    # return response

    # print(a)
    # return HttpResponse(index.html)
    # context = {'list': 'cold'}
    # return render(request, 'index.html', context)
    return JsonResponse({'text': 'hello moiz'})
    