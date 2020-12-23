import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../interfaces/usuarios-interface';

@Injectable({
  providedIn: 'root'
})
export class ServicioPruebaService {

  constructor( private http: HttpClient) { }

  getUsuarios():Observable<Usuarios>{
    return this.http.get<Usuarios>('https://jsonplaceholder.typicode.com/users');
  }
}
