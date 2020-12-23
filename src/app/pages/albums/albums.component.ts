import { Component,  } from '@angular/core';
import { Albums } from 'src/app/interfaces/albums-interface';
import { ServicioPruebaService } from '../../services/servicio-prueba.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {

  constructor(private servicioPruebaServicio: ServicioPruebaService) { 
    this.getAlbums();
  }
  
  getAlbums(){
  this.servicioPruebaServicio.getAlbums().subscribe(albums => {
    console.log(albums);
  })
}

}
