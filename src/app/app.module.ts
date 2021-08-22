import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumsModule } from './albums/albums.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { PostsModule } from './posts/posts.module';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    
   
    
    
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    PostsModule,
    AlbumsModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
