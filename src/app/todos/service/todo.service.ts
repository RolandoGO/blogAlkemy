import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private url:string="https://jsonplaceholder.typicode.com/todos"

  constructor() {  }

  async getData(){
    try{
      const call= await axios.get(this.url)
      const res= await call.data
     
      return res
    }
    catch{
      return false
    }
  }

  

}
