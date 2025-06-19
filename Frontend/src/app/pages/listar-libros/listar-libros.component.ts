import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiLiteraturaService } from '../../services/api-literatura.service';

@Component({
  selector: 'app-listar-libros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})
export class ListarLibrosComponent implements OnInit {
  private apiService = inject(ApiLiteraturaService);
  libros: any[] = [];
  cargando = true;

  ngOnInit(): void {
    this.apiService.listarLibros().subscribe({
      next: (data) => {
        this.libros = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener libros:', err);
        this.cargando = false;
      }
    });
  }
}
