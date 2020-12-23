import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from '../interfaces/albums-interface';
import { Fotos } from '../interfaces/fotos-intercace';
import { Publicaciones } from '../interfaces/publicaciones-interface';
import { Usuarios } from '../interfaces/usuarios-interface';
import { Comentarios } from '../interfaces/comentarios-interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioPruebaService {

  constructor( private http: HttpClient) { }

  getUsuarios():Observable<Usuarios>{
    return this.http.get<Usuarios>('https://jsonplaceholder.typicode.com/users');
  }

  getAlbums():Observable<Albums>{
    return this.http.get<Albums>('https://jsonplaceholder.typicode.com/albums');
  }

  getFotos():Observable<Fotos>{
    return this.http.get<Fotos>('https://jsonplaceholder.typicode.com/photos');
  }

  getPublicaciones():Observable<Publicaciones>{
    return this.http.get<Publicaciones>('https://jsonplaceholder.typicode.com/posts');
  }

  getComentarios():Observable<Comentarios>{
    return this.http.get<Comentarios>('https://jsonplaceholder.typicode.com/comments');

  }


}
