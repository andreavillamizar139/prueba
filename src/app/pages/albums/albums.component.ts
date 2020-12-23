import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/interfaces/albums-interface';
import { ServicioPruebaService } from '../../services/servicio-prueba.service';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];

  constructor(private servicioPruebaServicio: ServicioPruebaService) { 
    
  }
  
  ngOnInit(): void {
    this.Albums();

  // console.log(this.albums);
  }


  Albums(){
  this.servicioPruebaServicio.getAlbums().subscribe(albums=> {
  //console.log(albums);
  this.albums = albums as Album[]
  });
}

}
