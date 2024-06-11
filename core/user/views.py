from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.exceptions import status
from rest_framework.response import Response
from rest_framework import permissions
from .models import User
from user.serializers import UserSerializer
# Create your views here.

@api_view(["POST"])
@permission_classes([permissions.AllowAny])
def signin_or_create_user(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = User.objects.filter(email=email).first()

    if user:
        if user.check_password(password):
            # Return user details if the password is correct
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response({"detail": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
    else:
        # User doesn't exist, create new user
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
@permission_classes([permissions.IsAuthenticatedOrReadOnly])
def get_user(request):

    serializer = UserSerializer(request.user)
    return Response(serializer.data, status=status.HTTP_200_OK)
