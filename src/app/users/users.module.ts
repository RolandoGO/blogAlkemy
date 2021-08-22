import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';

import { UsercardComponent } from './UserCardComponent/usercard/usercard.component';
import { UserDetailsComponent } from './user-details/user-details.component';




@NgModule({
  declarations: [
    UserComponent,
    UsercardComponent,
    UserDetailsComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
  UserComponent
  ]
})
export class UsersModule { }
