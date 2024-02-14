import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes : string[] = ['Hulk','Venom','Spiderman','Wolverine'];
  heroeBorrado : string = '';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
