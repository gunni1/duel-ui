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
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes =  [
  {path: 'login', component: LoginComponent},
  {path: 'avatars', component: ListAvatarsComponent},
  {path: 'avatar/:id', component: AvatarDetailComponent},
  {path: '', redirectTo: '/login'},
  {path: '**', component: PageNotFoundComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    ListAvatarsComponent, //TODO: Raus wenn Routing eingebaut?
    AvatarDetailComponent, MessagesComponent, LoginComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    )
  ],
  providers: [AvatarService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
