import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnInit {


  @Input() data:any
  @Output() albumDetails= new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  passingData(path:string,id:number|string){
    const objInf={
      path,
      id
    }
    this.albumDetails.emit(objInf)
  }
}
