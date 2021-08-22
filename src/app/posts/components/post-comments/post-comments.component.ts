import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {

  @Input() data:any
  error:boolean=false
  commentsData:Array<any>=[]

  constructor(private service:PostService) { }

  ngOnInit(): void {

    this.service.getPostComments(this.data.id)
    .then(comments=>{
      if(!comments) this.error=true
      else{
        this.commentsData = comments
        console.log(comments)
      }
    })

  }

}
