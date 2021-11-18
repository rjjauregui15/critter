import requests
from django.shortcuts import render

# Create your views here.

def weather_index(request):
    url = 'http://api.openweathermap.org/data/2.5/weather?lat={}&lon={}&units=imperial&appid=e9e08908675df4cc8b0d9478f5e607dc'
    # 'http://api.openweathermap.org/data/2.5/weather?q={}&units=imperial&appid=e9e08908675df4cc8b0d9478f5e607dc'

    city = 'Santa Cruz california'    
    lat = '37'
    lon = '122'

    r = requests.get(url.format(lat,lon))

    # r = requests.get(url.format(city))

    print(r.text)

    weather_info = {

    }



    return render(request, 'weather.html') 