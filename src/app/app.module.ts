import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/listado/heroes.modulo';
//import { ContadorComponent } from './contador/contador/contador.component';

//crear un modulo contadorModule.ts
//declaraciones y exportaciones

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroesModule, ContadorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
