from django.urls import path, URLPattern
from .views import *

urlpatterns = [
    path('wetsuits/', WetsuitsView.as_view()),
    path('wetsuits/<str:category>/', WetsuitsByCategoryView.as_view()),
    path('wetsuits/<int:id>', WetsuitsView.as_view()),
    # path('wetsuits/<int:id>/delete/', WetsuitsView.as_view())

]
