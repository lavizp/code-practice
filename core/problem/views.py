from rest_framework import generics
from .models import Problem
from .serializers import ProblemSerializer

class ProblemListCreateView(generics.ListCreateAPIView):
    queryset = Problem.objects.all()
    serializer_class = ProblemSerializer

class ProbemRetreiveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Problem.objects.all()
    serializer_class = ProblemSerializer