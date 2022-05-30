import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CreatePostsComponent } from './pages/create-posts/create-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CreatePostsComponent
  ],
  imports: [
    BrowserModule,
    //Nota: debe estar importado para que funcione el componente de rutas
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
