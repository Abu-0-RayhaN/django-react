from django.shortcuts import render
# Create your views here.
from rest_framework import generics
from .models import todo
from .serializers import TodoSerializer


class TodoList(generics.ListAPIView):
    queryset = todo.objects.all()
    serializer_class = TodoSerializer


class TodoDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = todo.objects.all()
    serializer_class = TodoSerializer
