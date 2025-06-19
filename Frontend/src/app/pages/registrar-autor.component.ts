import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ApiLiteraturaService } from '../../../src/app/services/api-literatura.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-registrar-autor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './registrar-autor.component.html',
  styleUrls: ['./registrar-autor.component.css']
})
export class RegistrarAutorComponent {
  private fb = inject(FormBuilder);
  private api = inject(ApiLiteraturaService);

  autorForm = this.fb.group({
    nombre: ['', Validators.required],
    fechaDeNacimiento: [''],
    fechaDeMuerte: ['']
  });

  mensaje = '';
  submitted = false;

  registrar() {
    this.submitted = true;

    if (this.autorForm.invalid) {
      this.mensaje = '⚠️ Complete todos los campos requeridos.';
      return;
    }

    this.api.registrarAutor(this.autorForm.value).subscribe({
      next: (res) => {
        this.mensaje = '✅ Autor registrado exitosamente.';
        this.autorForm.reset();
        this.submitted = false;
      },
      error: (err) => {
        this.mensaje = '❌ Ocurrió un error al registrar.';
        console.error(err);
      }
    });
  }
}
