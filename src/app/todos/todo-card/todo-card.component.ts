import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent  {

  @Input() data:Array<any>=[]
  filterUsers:string=""
  
  constructor() { }

  changeState(value:any){
    
    
    const newArray=[...this.data]
    

    newArray.forEach(todo=>{

      if(todo.id==value.id){
        todo.completed=!todo.completed
      }
    })

    
  
  }

}
