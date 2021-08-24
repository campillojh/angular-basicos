//Servicios
//LA diferencia con un  componente es el decorador Injectable()
//Hay que exportalo y adiconar providers en el modulo dbz.module.ts

import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegueta',
      poder: 8500,
    },
  ];

  //retorna el private _personajes
  get personajes(): Personaje[] {
    //Js todo lo pasa por argumentos- para evitar manupular este argumento
    //se mete el llavez  y se le agraga el operador spread - separa cada elemento yadicona uno nuevo
    return [...this._personajes];
  }

  constructor() {
    console.log('Servicios Inicalizado');
  }

  //anadir personajes
  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
