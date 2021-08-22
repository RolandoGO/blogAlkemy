import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './users/user/user.component';
import { PostComponent } from './posts/post/post.component';
import { AlbumComponent } from './albums/album/album.component';
import { TodoComponent } from './todos/todo/todo.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"Usuarios", component:UserComponent},
  {path:"Posts", component:PostComponent},
  {path:"Albumns", component:AlbumComponent},
  {path:"Todos", component:TodoComponent},
  {path:"**", pathMatch:"full", component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
