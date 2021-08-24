import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent {
  //decorador para traer datos de otro compomenete Padre
  //se relaciona con main-page.component.html Padre
  //<app-personajes [personajes]="personajes"> </app-personajes>

  // @Input("data ") es el alias como se publica el @input
  //Habria que modificar la referencia en <app-personajes [data]="personajes"> </app-personajes>

  //@Input() personajes: Personaje[] = [];
  get personajes() {
    return this.dbzService.personajes;
  }
  constructor(private dbzService: DbzService) {}
}
