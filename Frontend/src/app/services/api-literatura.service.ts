import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api'; // ✅ actualizado


@Injectable({
  providedIn: 'root'
})
export class ApiLiteraturaService {
  private http = inject(HttpClient);

  listarLibros(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/libros/dto`);
  }


  listarAutores(): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}/autores`);
  }

  registrarLibro(data: any): Observable<any> {
    return this.http.post(`${API_URL}/libros`, data);
  }

  registrarAutor(data: any): Observable<any> {
    return this.http.post(`${API_URL}/autores`, data);
  }

  obtenerLibro(id: number): Observable<any> {
    return this.http.get(`${API_URL}/libros/${id}`);
  }

  obtenerAutor(id: number): Observable<any> {
    return this.http.get(`${API_URL}/autores/${id}`);
  }
}
