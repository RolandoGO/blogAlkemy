import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {


  @Input() data:Array<any>=[]
  @Output() userDetails= new EventEmitter<object>()
  display:boolean=false
  constructor() { }

  ngOnInit(): void {
  }

  albumsDetails(userData:number|string,path:string){
    const objInfo={
      id:userData,
      path,
      display:this.display

    }
    this.userDetails.emit(objInfo)
    
  }

}
