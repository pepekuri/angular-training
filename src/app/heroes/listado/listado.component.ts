import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[]= ['Batman', 'Thor', 'Kuri'];
  heroeBorrado:string = '';

  borrarHeroe():any{
    console.log("Borrando");
    this.heroeBorrado= this.heroes.shift() || '';
  }

}
