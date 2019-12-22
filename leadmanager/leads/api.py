from rest_framework import viewsets, permissions
from .serializers import LeadSerializer
from .models import Lead


class LeadViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    serializer_class = LeadSerializer

    def get_queryset(self):
        return self.request.user.owned_leads.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
