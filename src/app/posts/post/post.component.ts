import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  data:Array<any>=[]
  error:boolean=false
  filterPosts:string=""

  postDetails:boolean=false
  postDetailsData:any={}

  constructor(private service:PostService) { }

  ngOnInit(): void {

    this.service.getData().then(posts=>{
      if(!posts)this.error=true
      else{
        this.data=posts
      }
    })
  }

  childMsj(msj:any){
    
    this.postDetails=true
    this.postDetailsData=msj
  }

  

}
