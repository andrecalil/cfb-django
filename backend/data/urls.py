from django.urls import path

from . import views

urlpatterns = [
    path("stores", views.stores_list),
    path("support", views.support_list),
    path("partners", views.partners_list),
    path("links", views.links_list),
]