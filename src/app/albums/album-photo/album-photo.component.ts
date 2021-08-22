import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrls: ['./album-photo.component.css']
})
export class AlbumPhotoComponent implements OnInit {

  @Input() data:any=[]
  @Output() deleteImage= new EventEmitter<object>()

  showModal:boolean=false
  modalUrl:string=""
  
  constructor() { }

  ngOnInit(): void {


  }

  deleteImageData(value:any){

    this.deleteImage.emit({id:value})
  }

  modalImage(image:string){
    this.modalUrl=image
    this.showModal=true

  }


}
