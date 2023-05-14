from django.urls import path
from .views import *
urlpatterns = [
    path('', TodoList.as_view(), name='todo-list'),
    path('<int:pk>/', TodoDetailAPIView.as_view(),
         name='todo-detail-update-delete'),

]
