import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from '../../services/servicio-prueba.service';
import { Fotos } from '../../interfaces/fotos-intercace';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit{

  fotos: Fotos[];


  

  constructor(private servicioPruebaServicio: ServicioPruebaService) { 
    
  }
  
  ngOnInit(): void {
  this.Fotos();

   console.log(this.fotos);
  }



  Fotos(){
  this.servicioPruebaServicio.getFotos().subscribe(Fotos=> {
  console.log(Fotos);
  this.fotos = Fotos as unknown as Fotos[]
  });
}

}
