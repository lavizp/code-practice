from django.urls import path
from .views import ProblemListCreateView, ProbemRetreiveUpdateDestroyView

urlpatterns = [
    path('', ProblemListCreateView.as_view(), name='problem-list-create'),
    path('<int:pk>/', ProbemRetreiveUpdateDestroyView.as_view(), name='problem-detail')
]