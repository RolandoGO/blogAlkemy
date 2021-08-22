import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  error:boolean=false
  todosList:Array<any>=[]

  constructor(private service:TodoService) { }

  ngOnInit(): void {

    this.service.getData()
    .then(todos=>{
      (!todos)? this.error=true:this.todosList = todos
    })
  }

}
