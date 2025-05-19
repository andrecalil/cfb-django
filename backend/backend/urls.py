"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from react.views import serve_react

# Base URL patterns
base_patterns = [
    path('admin/', admin.site.urls),
    path('api/data/', include('data.urls')),
    path('cameras/', include('cameras.urls')),
    path('', TemplateView.as_view(template_name='index.html')),
]

# Static files configuration
static_patterns = static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

# React app catch-all pattern
react_patterns = [
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]

# Combine all patterns in the correct order
urlpatterns = base_patterns + static_patterns #+ react_patterns