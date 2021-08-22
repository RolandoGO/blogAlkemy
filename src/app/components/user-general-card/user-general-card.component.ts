import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/service/user.service';

@Component({
  selector: 'app-user-general-card',
  templateUrl: './user-general-card.component.html',
  styleUrls: ['./user-general-card.component.css']
})
export class UserGeneralCardComponent implements OnInit {

  @Input() data:any
  userData:any
  error:boolean=false
  
  constructor(private service:UserService) { }

  ngOnInit(): void {

    this.service.getOneUserData(this.data.id)
    .then(user=>{
      if(!user) this.error=true
      else{
        this.userData=user
        
      }
    })
  }

}
