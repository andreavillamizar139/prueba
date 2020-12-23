import { Component } from '@angular/core';
import { ServicioPruebaService } from './services/servicio-prueba.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoPruebaTecnica';
  constructor( private servicioPruebaServicio:ServicioPruebaService){
    this.servicioPruebaServicio.getUsuarios()
    .subscribe(resp=>{
      console.log(resp);
    })
  }
}
