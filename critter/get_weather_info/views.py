import requests
from django.shortcuts import render

# Create your views here.

def weather_index(request):
    url = 'http://api.openweathermap.org/data/2.5/weather?q={}&appid=e9e08908675df4cc8b0d9478f5e607dc'
    #'api.openweathermap.org/data/2.5/weather?q={}&appid=e9e08908675df4cc8b0d9478f5e607dc'

    city = 'Santa Cruz'    

    r = requests.get(url.format(city))

    print(r.text)

    weather_info = {

    }



    return render(request, 'weather.html') 