from django.db import models


class Lead(models.Model):
    name = models.CharField(max_length=128)
    email = models.EmailField(max_length=128, unique=True)
    message = models.CharField(max_length=512, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
