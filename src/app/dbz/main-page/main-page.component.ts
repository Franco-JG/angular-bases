import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  title: string = 'main-page component'
  // agregar(event : any){
  //   event.preventDefault();   //para evitar el comportamiento de autorefrescar la pantalla
  //   console.log('Hey!');
    
  // }
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 14000
    },
    {
      nombre: 'Broly',
      poder: 99999999
    }
  ];

  nuevo : Personaje = {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje(arg:Personaje){
    console.log(this.title);
    this.personajes.push(arg);
  }
}
