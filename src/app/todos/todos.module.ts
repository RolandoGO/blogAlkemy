import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    TodoComponent,
    TodoCardComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    PipesModule
  ],
  exports:[
    TodoComponent
  ]
})
export class TodosModule { }
