import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {

  

  private url:string="https://jsonplaceholder.typicode.com/albums"
  private photosUrl:string="https://jsonplaceholder.typicode.com/photos"

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

  async getPhotos(id:number|string){
    try{
      const call= await axios.get(`${this.photosUrl}?albumId=${id}`)
      const res= await call.data
      
      return res
    }
    catch{
      return false
    }
  }

 

}
