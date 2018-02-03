import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AvatarModule} from "./avatar/avatar.module";


import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ListAvatarsComponent} from "./avatar/list-avatars/list-avatars.component";


@NgModule({
  declarations: [
    AppComponent,
    ListAvatarsComponent //TODO: Raus wenn Routing eingebaut?
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
