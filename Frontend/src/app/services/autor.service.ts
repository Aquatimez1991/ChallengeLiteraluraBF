import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Autor {
  id: number;
  nombre: string;
  fechaDeNacimiento: number;
  fechaDeMuerte: number;
}

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  private apiUrl = 'http://localhost:8080/autores';

  constructor(private http: HttpClient) {}

  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.apiUrl);
  }
}
