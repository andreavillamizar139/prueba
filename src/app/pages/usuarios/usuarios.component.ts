import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/interfaces/usuarios-interface';
import { ServicioPruebaService } from 'src/app/services/servicio-prueba.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  public usuarios:Usuarios;

  constructor( private servicioPruebaServicio:ServicioPruebaService, private router:Router){
    
  }

  ngOnInit(): void {
    this.servicioPruebaServicio.getUsuarios()
    .subscribe(resp=>{
      //console.log(resp);
      this.usuarios=resp;
    })
  }

  verAlbum(index:number){
    this.router.navigate(['/albums',index]);
  }

  verPublicaciones(index:number){
    //console.log(index);
    this.router.navigate(['/post',index]);
  }

}
