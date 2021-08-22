import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailCardComponent } from './user-detail-card/user-detail-card.component';



@NgModule({
  declarations: [
    UserDetailCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserDetailCardComponent
  ]
})
export class GeneralComponentsModule { }
