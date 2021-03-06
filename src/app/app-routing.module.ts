import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { cpuUsage } from 'process';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';


const routes: Routes = [
{path: 'usuarios',component: UsuariosComponent},
{path: 'albums',component: AlbumsComponent},
{path: 'albums/:id',component: AlbumsComponent},
{path: 'post',component: PostsComponent},
{ path: 'post/:id', component: PostsComponent},
{path: 'comentarios',component: ComentariosComponent},
{ path: 'comentarios/:id', component: ComentariosComponent},
{path: 'fotos',component: PhotosComponent},
{path: 'fotos/:id',component: PhotosComponent},
{path: '', pathMatch:"full", redirectTo:'usuarios'},
{path: '**', pathMatch:"full", redirectTo:'usuarios'}
];

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AppRoutingModule { }

export const APP_ROUTES = RouterModule.forRoot(routes);