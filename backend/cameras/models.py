from django.db import models


class Camera(models.Model):
    name = models.CharField(max_length=100)
    release_year = models.IntegerField()
    resolution = models.CharField(max_length=10)
