import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';
/* Creo una interface  Personaje para definir estructura de los input*/
//la interfaz la corto y la manso para bdz.interfaces.ts
// interface Personaje {
//   nombre: string;
//   poder: number;
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  //agregar(event: any) {
  // event.preventDefault();
  //console.log(event);

  nuevo: Personaje = {
    nombre: 'Maestro Rochi',
    poder: 1000,
  };

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }
  //defino nuevo metodo para trabajar pader -Hijo
  // agregarNuevoPersonaje(argumento: Personaje) {
  //   // console.log('Main page component');
  //   // console.log(argumento);
  //   debugger;
  //   //agrego el argumento que viene del hijo
  //   // this.personajes.push(argumento);
  // }
  //inyeccion de dependencias
  constructor() {}
}
