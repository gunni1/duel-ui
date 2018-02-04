import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AvatarModule} from "./avatar/avatar.module";


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ListAvatarsComponent} from "./avatar/list-avatars/list-avatars.component";
import {AvatarDetailComponent} from "./avatar/avatar-detail/avatar-detail.component";
import {AvatarService} from "./avatar/avatar.service";
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    ListAvatarsComponent, //TODO: Raus wenn Routing eingebaut?
    AvatarDetailComponent, MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AvatarService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
