from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Character
from django.shortcuts import get_object_or_404
from django.http import JsonResponse

class CharacterListView(APIView):
    def get(self, request):
        characters = Character.objects.all()
        data = [
            {
                "id": char.id,
                "name": char.name,
                "description": char.description,
                "image": request.build_absolute_uri(char.image.url) if char.image else None
            }
            for char in characters
        ]
        return Response(data)

def character_detail_view(request, id):
    character = get_object_or_404(Character, pk=id)
    image_url = request.build_absolute_uri(character.image.url) if character.image else None
    return JsonResponse({
        'name': character.name,
        'description': character.description,
        'image': image_url 
    })