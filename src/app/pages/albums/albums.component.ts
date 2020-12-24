import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/interfaces/albums-interface';
import { ServicioPruebaService } from '../../services/servicio-prueba.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
  albumsDe: Album[]=[];
  navigate: any;
  index: number;
  indexString: string;

  constructor(private servicioPruebaServicio: ServicioPruebaService, private activatedRoute:ActivatedRoute,  private router:Router) { 
    this.activatedRoute.params.subscribe(params => {
      this.indexString=params['id'];
    })
    this.index = parseInt(this.indexString);
    this.VerAlbums();
  }
  
  ngOnInit(): void { }


  VerAlbums(){
  this.servicioPruebaServicio.getAlbums().subscribe(resp=> {
    this.albums = resp as unknown as Album[];
    //console.log(this.albums);
    for(const index in this.albums){
      if(this.albums[index].userId === this.index){
        this.albumsDe.push(this.albums[index]);
      } 
   }
 })
}


verFotos(index:number){
  this.router.navigate(['/fotos',index]);
}

}
