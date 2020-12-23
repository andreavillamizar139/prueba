import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from '../../services/servicio-prueba.service';
import { Fotos } from '../../interfaces/fotos-intercace';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit{
<<<<<<< HEAD
  fotos: Fotos[];
=======
  fotos: Fotos;
>>>>>>> 76798923489373652b2238ae4f17152ccab2bdf6
  

  constructor(private servicioPruebaServicio: ServicioPruebaService) { 
    
  }
  
  ngOnInit(): void {
    this.Albums();

   console.log(this.fotos);
  }


<<<<<<< HEAD
  Fotos(){
  this.servicioPruebaServicio.getFotos().subscribe(Fotos=> {
  console.log(Fotos);
  this.fotos = Fotos as unknown as Fotos[]
=======
  Albums(){
  this.servicioPruebaServicio.getFotos().subscribe(Fotos=> {
  console.log(Fotos);
  this.fotos = Fotos;
  console.log(this.fotos);
>>>>>>> 76798923489373652b2238ae4f17152ccab2bdf6
  });
}

}
