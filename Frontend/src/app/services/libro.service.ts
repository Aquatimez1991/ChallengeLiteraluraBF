import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Libro {
  id: number;
  titulo: string;
  idiomas: string[];
  numeroDeDescargas: number;
  autores: Autor[];
}


export interface Autor {
  id: number;
  nombre: string;
  fechaDeNacimiento: number;
  fechaDeMuerte: number;
}

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  private apiUrl = 'http://localhost:8080/libros';

  constructor(private http: HttpClient) {}

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.apiUrl);
  }
}
