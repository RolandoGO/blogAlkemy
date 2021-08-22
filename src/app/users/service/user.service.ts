import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string="https://jsonplaceholder.typicode.com/users"
  private detailsUrl:string="https://jsonplaceholder.typicode.com"

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

  async getUserDetails(path:string,id:number){
    try{
      const call= await axios.get(`${this.detailsUrl}/${path}?userId=${id}`)
      const res= await call.data
      
      return res
    }
    catch{
      return false
    }
  }

  async getOneUserData(id:string|number){
    try{
      const call= await axios.get(`${this.url}/${id}`)
      const res= await call.data
     
      return res
    }
    catch{
      return false
    }
  }




}
