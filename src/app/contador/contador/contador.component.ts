//Lo combierto en Decorador
import { Component } from '@angular/core';

//creo del Decorador
@Component({
  selector: 'app-contador',
  template: `<!-- imprimo title del app.componenet.ts
    tambien enre las llaves se puede escribir JS -->
    <h1>{{ titulo }}</h1>

    <h3>
      La base es : <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular(+base)">+{{ base }}</button>

    <span>{{ numero }} </span>

    <button (click)="acumular(-base)">-{{ base }}</button> `,
})
export class ContadorComponent {
  public titulo: string = 'Contador App';
  numero: number = 10;
  //Cambio el metodo para mandar Argumentos
  acumular(valor: number) {
    this.numero += valor;
  }
  //creo un metodo
  // sumar() {
  //   this.numero += 1;
  // }
  // restar() {
  //   this.numero -= 1;
  // }

  //Tarea

  base: number = 5;
}
