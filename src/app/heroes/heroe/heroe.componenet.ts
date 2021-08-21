//Creo en Coonponente

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
  nombre: String = 'Iroman';
  edad: number = 45;

  //get
  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    //backTis
    return `${this.nombre} - ${this.edad}`;
  }
  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 49;
  }
}
//Enlazado en unsaola via - on e way data bulding
