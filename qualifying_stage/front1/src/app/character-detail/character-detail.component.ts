import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters.service';
import { CommonModule } from '@angular/common';
import { Character } from '../characters.model';  // Импортируем модель

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css'],
  imports: [CommonModule]
})
export class CharacterDetailComponent implements OnInit {
  character: Character | null = null;  // Указываем тип данных для персонажа

  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.charactersService.getCharacter(id).subscribe(data => {
      this.character = data;  
    });
  }
}
