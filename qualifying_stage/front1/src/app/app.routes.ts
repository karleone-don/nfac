import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'characters', component: CharactersComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'characters/:id', component: CharacterDetailComponent }

];
