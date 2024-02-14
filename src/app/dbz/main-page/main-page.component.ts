import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //Aparece por defecto en Agregar
  nuevo : Personaje = {
    nombre: '',
    poder: 0
  }
  // get personajes():Personaje[]{
  //   return this.servicio.personajes;
  // }


  //Inyeccion de dependencias
  // constructor(private servicio: DbzService) {
  //   // this.personajes = servicio.personajes;   Funciona!
  // }
  
}
