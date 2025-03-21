from django.urls import path
from .views import RegisterView
from .views import LoginView
from .views import LogoutView
from .views import TaskCreateView
from .views import TaskListView
from .views import TaskDeleteView
from .views import TaskUpdateView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path("logout/", LogoutView.as_view(), name="logout"),
    path('tasks/add/', TaskCreateView.as_view(), name='add-task'),  # Add task
    path('tasks/view/', TaskListView.as_view(), name='view-task'),  
    path('tasks/delete/<int:pk>/', TaskDeleteView.as_view(), name='delete-task'),
    path('tasks/edit/', TaskUpdateView.as_view(), name='edit-task'),  
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
