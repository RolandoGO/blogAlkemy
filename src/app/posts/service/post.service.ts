import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  url:string="https://jsonplaceholder.typicode.com/posts"
  commentsUrl:string="https://jsonplaceholder.typicode.com/comments"
  constructor() { }
  
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

  async getPostComments(id:number|string){
    try{
     
      const call= await axios.get(`${this.commentsUrl}?postId=${id}`)
      const res= await call.data
     
      return res
    }
    catch{
      return false
    }
  }



}
