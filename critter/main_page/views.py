import json
import requests
from django.http.response import JsonResponse
from django.shortcuts import render

# Create your views here.

def index(request):
    print("hi yalll")
    return render(request, 'index.html')
 
def test(request,longitude,latitude):
    print(longitude)
    print(latitude)

    url = 'http://api.openweathermap.org/data/2.5/weather?lat={}&lon={}&appid=e9e08908675df4cc8b0d9478f5e607dc'

    r = requests.get(url.format(latitude,longitude))

    print(r.text)

    



    print("hi momomiiii---")
    
   
    data = {
        'name': 'Vitor',
        'location': 'Finland',
        'is_active': True,
        'count': 28
    }
    return JsonResponse(data)


    # response = HttpResponse({'text is the beach in this bitch'})
    # return response

    # print(a)
    # return HttpResponse(index.html)
    # context = {'list': 'cold'}
    # return render(request, 'index.html', context)
    # return JsonResponse({'text': 'hello moiz'})
    