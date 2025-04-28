import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './characters.model';  // Импортируем модель

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private apiUrl = 'http://127.0.0.1:8000/api/characters/';

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {  // Указываем тип данных
    return this.http.get<Character[]>(this.apiUrl);
  }

  getCharacter(id: number): Observable<Character> {  // Указываем тип данных
    return this.http.get<Character>(`${this.apiUrl}${id}/`);
  }
}
