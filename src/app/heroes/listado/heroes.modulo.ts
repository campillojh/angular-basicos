import { NgModule } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.componenet';
import { ListadoComponent } from '../listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
  //declaraciones
  declarations: [HeroeComponent, ListadoComponent],
  exports: [ListadoComponent, HeroeComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
