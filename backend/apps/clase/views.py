from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth import authenticate

from .models import Clase
from .serializer import ClaseSerializer

class ListCreateClase(generics.ListCreateAPIView):  # Cambiado a ListCreateAPIView
    queryset = Clase.objects.all()
    serializer_class = ClaseSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
