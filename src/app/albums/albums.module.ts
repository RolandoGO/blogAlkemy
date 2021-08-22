import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { AlbumCardComponent } from './album-card/album-card.component';
import { GeneralComponentsModule } from '../general-components/general-components.module';
import { AlbumPhotoComponent } from './album-photo/album-photo.component';



@NgModule({
  declarations: [
    AlbumComponent,
    AlbumCardComponent,
    AlbumPhotoComponent,
    
  ],
  imports: [
    CommonModule,
    GeneralComponentsModule
  ],
  exports:[
    AlbumComponent
  ]
})
export class AlbumsModule { }
