import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from '../../services/servicio-prueba.service';
import { Fotos } from '../../interfaces/fotos-intercace';
import { ActivatedRoute } from '@angular/router';
import{ Location }from '@angular/common';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit{
  fotos: Fotos[]=[];
  fotosDe: Fotos[]=[];
  index: number;
  indexString: string;


  constructor(private servicioPruebaService:ServicioPruebaService, private activatedRoute:ActivatedRoute, private location: Location) { 
    this.activatedRoute.params.subscribe(params => {
      this.indexString=params['id'];
    })
    this.index = parseInt(this.indexString);
    this.verFotos();
  }
  
  ngOnInit(): void {}

  verFotos(){
    this.servicioPruebaService.getFotos()
    .subscribe(resp =>{
      this.fotos = resp as unknown as Fotos[];
      // console.log(this.comentarios);
      for(const index in this.fotos){
        if(this.fotos[index].postId === this.index){
          this.fotosDe.push(this.fotos[index]);
        }
      }
      // console.log('Comentarios:   ');
      // console.log(this.fotosDe);
    })
  }

  paginaAnterior(){
    this.location.back();
  }


}
