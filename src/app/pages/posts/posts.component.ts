import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioPruebaService } from '../../services/servicio-prueba.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor( private servicioPruebaService:ServicioPruebaService, private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
    })
    this.VerPublicaciones();
   }

  ngOnInit(): void {
  }

  VerPublicaciones(){
    this.servicioPruebaService.getPublicaciones()
    .subscribe(resp=>{
      //console.log(resp);
    })
  }

}
