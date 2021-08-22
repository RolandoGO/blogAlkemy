import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {



  usersList:Array<any>=[]

  userDetailsOff:boolean=true
  userDetailData:any={}

  constructor(private service:UserService) { }

  ngOnInit(): void {


    this.service.getData().then(users=>{
      if(!users)alert("error de conexion")
      else{
        this.usersList=users
      }
    })
  }

  childMsj(msj:any){

    this.userDetailsOff=msj.display
    this.userDetailData= msj
    

  }


}
