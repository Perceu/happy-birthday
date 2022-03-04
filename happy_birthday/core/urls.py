from django.urls import path
from happy_birthday.core.views import HomeView

urlpatterns = [
    path('', HomeView.as_view()),
]
