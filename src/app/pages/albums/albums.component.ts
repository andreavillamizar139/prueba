import { Component,  } from '@angular/core';
import { ServicioPruebaService } from '../../services/servicio-prueba.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {

albums: string

  constructor(private servicioPruebaServicio: ServicioPruebaService) { }
  
  Albums(){
  this.servicioPruebaServicio.getAlbums().subscribe(albums=> {
    console.log(albums);
  })
  this.servicioPruebaServicio.getAlbums().subscribe(albums=> {
    console.log(albums);
  })
}

}
