# ProyectoPruebaTecnica

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## API aplicada al proyecto
La API que alimenta esta aplicación web cuenta con distinta información, entre ella un conjunto de usuarios de los cuales de manera relacional se conectan con unas publicaciones y estas publicaciones se relacionan con comentarios. De igual manera, el usuario se relaciona con información de albumes los cuales estan relacionados con fotos.


## Aplicación web
Se creó una aplicación web en la cual de manera inicial se muestran todos los usuarios disponibles, cada card tiene acceso directo a las publicaciónes y albumes hechas por el respectivo usuario. Al ver la lista de publicaciones se pueden consultar los comentarios de cada una de ellas. Adicional a esto, al entrar a los albumes se tiene acceso a las fotos pertenecientes a él.

Se implemento Angular 11(interfaces, componentes, servicios, entre otras herramientas del mismo), bootstrap y la API proporcionando la información.


## Estructura del proyecto
Las carpetas principales dentro de la app
- components (navbar)
- interfaces (álbum, comentario, foto, publicación, usuario)
- pages (albums, comentarios, photos, post, usuarios)
- services (servicio de prueba técnica)
Páginas de app-routing.module.ts, index.html, app.module.ts y demás archivos necesarios


## Trabajo en equipo
En cuanto a las tareas, se llevó a cabo una distribución de la siguiente manera:

Manuel encargado de:
- Navbar y rutas principales
- Despliegue de albumes por usuario
- Despliegue de fotos por albumes

Andrea encargada de:
- Implementacion de servicio y despliegue de usuarios
- Despliegue de publicaciones por usuario
- Despliegue de comentarios por publicación 

De igual manera, se llevó a cabo un acompañamiento y respaldo mutuo ante la prueba establecida.


## Pasos para clonar y observar el proyecto
1. Crear la carpeta donde se almacenará el repositorio de manera local
2. Por medio de la terminal nos posicionamos en esta carpeta "cd ..."
3. En la terminal "git init "
4. "git clone https://github.com/andreavillamizar139/prueba.git"
5. npm install para los modulos de node
5. Una vez clonada la aplicación inicializar el proyecto "ng serve"
