import { Component, Input, Output, EventEmitter } from '@angular/core';
//import { personajes } from '../interfaces/dbz.personajes';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  //@Input() personajes: Personaje[] = [];
  //paso el metodo del main-page-components.ts

  //@Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  //manda la informacion al component Padre-
  //Merodo EventEmitter() emitimos un personaje
  //emite eventos- siempre especificar eltipo de dato
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }
  //necesito llamar el metodo aghregar que se creo en el servicio
  constructor(private dbzService: DbzService) {}

  agregar() {
    //valido los input
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    //agrego personaje nuevo al
    //this.personajes.push(this.nuevo);
    console.log(this.nuevo);
    //emito el nuevo personaje
    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    //dejo input en blanco
    this.nuevo = {
      nombre: ' ',
      poder: 0,
    };
  }
}
