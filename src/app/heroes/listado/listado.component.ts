import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
//Primero de los  Ciclos de vidas que podemos ver en angular
//Son metodos que dispara angular de manera automatica
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Goku',
    'Hulk',
    'Batman',
    'Thor',
    'MMaravilla',
  ];
  // para capturar el hero borrado hay crear una propiedad
  heroeBorrado: string = '';

  borrarHeroe() {
    // console.log('Borrando....');
    // const heroeBorrado = this.heroes.shift();
    // si la respuesta delshif es undefine se pone el operador OR para que retorne string vacio
    this.heroeBorrado = this.heroes.shift() || '';
    //console.log(heroeBorrado);
  }
}
