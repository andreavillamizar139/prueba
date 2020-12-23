import { Component, OnInit } from '@angular/core';
import { Comentarios } from 'src/app/interfaces/comentarios-interface';
import { ServicioPruebaService } from '../../services/servicio-prueba.service';
import { ActivatedRoute } from '@angular/router';
import{ Location }from '@angular/common';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  comentarios: Comentarios[]=[];
  comentariosDe: Comentarios[]=[];
  index:number;
  indexString: string;

  constructor(private servicioPruebaService:ServicioPruebaService, private activatedRoute:ActivatedRoute, private location: Location) {
    this.activatedRoute.params.subscribe(params => {
      this.indexString=params['id'];
    })
    this.index = parseInt(this.indexString);
    this.verComentarios();
   }

  ngOnInit(): void {
  }

  verComentarios(){
    this.servicioPruebaService.getComentarios()
    .subscribe(resp =>{
      this.comentarios = resp as unknown as Comentarios[];
      //console.log(this.comentarios);
      for(const index in this.comentarios){
        if(this.comentarios[index].postId === this.index){
          this.comentariosDe.push(this.comentarios[index]);
        }
      }
      // console.log('Comentarios:   ');
      // console.log(this.comentariosDe);
    })
  }

  paginaAnterior(){
    this.location.back();
  }

}
