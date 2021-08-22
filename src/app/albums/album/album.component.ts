import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../service/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})

export class AlbumComponent implements OnInit {

  error:boolean=false
 albumsList: Array<any>=[]
 photosList:Array<any>=[]

 userDetails:any
 displayUser:boolean=false
 displayPhotos:boolean=false
 albumDetails:boolean=false

  constructor(private service: AlbumService) { }

  ngOnInit(): void {

    this.service.getData().then(data=>{
      (!data)? this.error = true : this.albumsList=data
    })

    
  }


  childMsj(msj:any){
    this.albumDetails=true
    
    if(msj.path === "photos"){
        this.service.getPhotos(msj.id).then(data=>{
        (!data)? this.error =true : this.photosList=data
      })
     this.displayPhotos=true

    }

    else if(msj.path==="users"){
      
      this.userDetails=msj
    
      this.displayUser=true
      
    
    }
  }

  deleteImageHandler(value:any){
   

    const newArray = this.photosList.filter(d=>d.id !== value.id)
    this.photosList=newArray
  }

}
