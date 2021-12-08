import json
import requests
from django.http.response import JsonResponse
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')
 
def test(request,longitude,latitude):
    url = 'http://api.openweathermap.org/data/2.5/weather?lat={}&lon={}&units=imperial&appid=e9e08908675df4cc8b0d9478f5e607dc'
    r = requests.get(url.format(latitude,longitude))
    print(r.text)
    return JsonResponse(r.json())