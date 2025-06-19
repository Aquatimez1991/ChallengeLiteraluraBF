import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiLiteraturaService } from '../../services/api-literatura.service';

@Component({
  selector: 'app-listar-autores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.css']
})
export class ListarAutoresComponent implements OnInit {
  private apiService = inject(ApiLiteraturaService);
  autores: any[] = [];
  cargando = true;

  ngOnInit(): void {
    this.apiService.listarAutores().subscribe({
      next: (data) => {
        this.autores = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al obtener autores:', err);
        this.cargando = false;
      }
    });
  }
}
