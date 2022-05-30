import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Nota:   ng g m pages/posts --routing adicional --dry-run
const routes: Routes = [];

@NgModule({
  //Nota:   ruta hija
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
