import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { PostCardComponent } from './components/post-card/post-card.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import { UserGeneralCardComponent } from '../components/user-general-card/user-general-card.component';
import { GeneralComponentsModule } from '../general-components/general-components.module';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    PostComponent,
    
    PostCardComponent,
    PostCommentsComponent,
    UserGeneralCardComponent
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    GeneralComponentsModule,
    PipesModule
  ],
  exports:[
    PostComponent
  ]
})
export class PostsModule { }
