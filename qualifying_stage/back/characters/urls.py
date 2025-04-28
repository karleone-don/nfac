from django.urls import path
from .views import CharacterListView, character_detail_view

urlpatterns = [
    path('characters/', CharacterListView.as_view(), name='character-list'),
    path('characters/<int:id>/', character_detail_view, name='character-detail'), 
]
