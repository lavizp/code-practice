from django.urls import path
from . import views
urlpatterns = [
    path("signin/",views.signin_or_create_user, name='signin'),
    path("profile/", views.get_user, name="get_user_profile")
]