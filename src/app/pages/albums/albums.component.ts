import { Component,  } from '@angular/core';
import { ServicioPruebaService } from '../../services/servicio-prueba.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {

  constructor(private servicioPruebaServicio: ServicioPruebaService) { }

getAlbums(){
  this.servicioPruebaServicio.getAlbums().subscribe(albums => {
    console.log(albums);
  })
}


}
