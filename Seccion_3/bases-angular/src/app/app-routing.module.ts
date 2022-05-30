import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    //Nota: loadchildren se encarga de hacer lazy load, a la version antigua
    // loadChildren:'./pages/post/post.module#PostsModule'
    //Nota nueva version para carga lazyload
    loadChildren: () => import('./pages/posts/posts.module').then(m => m.PostsModule)
  }
  //Nota para que decirle, si una ruta no existe con el
  /*
  path:'**', redirectTo:'ruta'
  */

];

@NgModule({
  //Nota: por lo general solo existe un forRoot ya que este es el principal
  imports: [RouterModule.forRoot(routes)],
  //Nota: exportar la configuracion
  exports: [RouterModule]
})
export class AppRoutingModule { }
