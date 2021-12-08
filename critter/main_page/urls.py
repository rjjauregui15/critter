from django.urls import path
from . import views

urlpatterns = [
    path('',views.index),
    path('test/<str:longitude>/<str:latitude>/', views.test),
]
 