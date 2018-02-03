import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAvatarsComponent } from './list-avatars/list-avatars.component';
import { AvatarDetailComponent } from './avatar-detail/avatar-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListAvatarsComponent, AvatarDetailComponent]
})
export class AvatarModule { }
