from django.db import models
from django.contrib.auth.models import User


class Lead(models.Model):
    name = models.CharField(max_length=128)
    email = models.EmailField(max_length=128, unique=True)
    message = models.CharField(max_length=512, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        User,
        related_name='owned_leads',
        on_delete=models.CASCADE,
        null=True,
    )
