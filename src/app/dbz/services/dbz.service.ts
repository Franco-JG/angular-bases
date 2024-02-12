import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{
    // propiedad privada
    private _personajes: Personaje[] = [
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

    // Atributo que retorna una copia del arreglo
    get personajesGet():Personaje[]{
      return [...this._personajes];   //Operador spread?
    }

    constructor() {
        // console.log('Servicio inicializado');
    }

    agregarPersonaje(personaje:Personaje){
      this._personajes.push(personaje);
    }

}