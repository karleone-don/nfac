import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Character } from '../characters.model';  // Импортируем модель

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  imports: [CommonModule]
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];  // Используем интерфейс для массива

  constructor(private charactersService: CharactersService, private router: Router) {}

  ngOnInit(): void {
    this.charactersService.getCharacters().subscribe(data => {
      this.characters = data;  // Автоматическая типизация
    });
  }

  goToCharacter(id: number): void {
    this.router.navigate(['/characters', id]);
  }
}
