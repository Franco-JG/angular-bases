
import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `
    <h1>La app se llama: {{titulo}}</h1>
    <h2>La base es: {{base}}</h2>
    
    
    <button (click)="acumular(base*-1)">- {{base}}</button>
    <span>{{numero}}</span>
    <button (click)="acumular(base)">+ {{base}}</button>
    `
})

export class ContadorComponent{
    titulo : string = 'Acumulador';
    numero : number = 10;
    base : number = 10;


    acumular(valor : number){
        this.numero += valor;
    }
}
