import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent{
    nombre:string = 'Ironman';
    edad:number = 50

    obtenerNomnbre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    get nombreCapitalizado():string{
        return this.nombre.toLocaleUpperCase();
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad = this.edad-5;
    }
}