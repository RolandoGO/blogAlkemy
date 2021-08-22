import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/users/service/user.service';

@Component({
  selector: 'app-user-detail-card',
  templateUrl: './user-detail-card.component.html',
  styleUrls: ['./user-detail-card.component.css']
})

export class UserDetailCardComponent implements OnInit {

  

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
