import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { APP_ROUTES } from './app-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { RouterModule } from '@angular/router';
import { PhotosComponent } from './pages/photos/photos.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsuariosComponent,
    PostsComponent,
    AlbumsComponent,
    PhotosComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES
    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
