import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from 'src/app/services/servicio-prueba.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor( private servicioPruebaServicio:ServicioPruebaService){
    this.usuarios();
  }

  usuarios(){
    this.servicioPruebaServicio.getUsuarios()
    .subscribe(resp=>{
      console.log(resp);
    })
  }

  ngOnInit(): void {
  }

}
