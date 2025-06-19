import { Routes } from '@angular/router';
import { ListarLibrosComponent } from './pages/listar-libros/listar-libros.component';
import { ListarAutoresComponent } from './pages/listar-autores/listar-autores.component';
import { RegistrarAutorComponent } from './pages/registrar-autor/registrar-autor.component';

export const routes: Routes = [
  { path: '', redirectTo: 'libros', pathMatch: 'full' },
  { path: 'libros', component: ListarLibrosComponent },
  { path: 'autores', component: ListarAutoresComponent },
  { path: 'autores/registrar', component: RegistrarAutorComponent }
];
