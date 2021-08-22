import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {

  @Input() data:any
  @Output() searchData = new EventEmitter<object>()
  constructor() { }

  ngOnInit(): void {

   
  }
  
  requestHandler(id:number|string, path:string){

    const objInfo={
      path,
      id
    }
    this.searchData.emit(objInfo)

  }

}
