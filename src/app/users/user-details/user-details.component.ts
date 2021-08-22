import { Component, OnInit, Input } from '@angular/core';
import { UserService} from "../service/user.service"
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() data:any
  error:boolean=false
  userData:Array<any>=[]
  constructor(private service: UserService) { }

  ngOnInit(): void {
   
    this.service.getUserDetails(this.data.path,this.data.id)
    .then(data=>{
      if(!data) this.error=true
      else{
        this.userData=data
        console.log(data)
        
      }
    })
  }

  

}
