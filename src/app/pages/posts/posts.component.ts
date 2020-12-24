import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publicaciones } from 'src/app/interfaces/publicaciones-interface';
import { ServicioPruebaService } from '../../services/servicio-prueba.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  publicaciones: Publicaciones[];
  publicacionesDe: Publicaciones[]=[];
  index: number;
  indexString: string;
  

  constructor( private servicioPruebaService:ServicioPruebaService, private activatedRoute:ActivatedRoute,  private router:Router) {
    this.activatedRoute.params.subscribe(params => {
      this.indexString=params['id'];
    })
    this.index = parseInt(this.indexString);
    this.VerPublicaciones();
    
    
   }

  ngOnInit(): void {
  }

  VerPublicaciones(){
    this.servicioPruebaService.getPublicaciones()
    .subscribe(resp=>{
      this.publicaciones = resp as unknown as Publicaciones[];
      console.log(this.publicaciones);
      for(const index in this.publicaciones){
        if(this.publicaciones[index].userId === this.index){
          this.publicacionesDe.push(this.publicaciones[index]);
        } 
      }
      // console.log('Publicaciones:   ');
      // console.log(this.publicacionesDe);
    })
  }


  verComentarios(index:number){
    //console.log(index);
    this.router.navigate(['/comentarios',index]);
  }
}