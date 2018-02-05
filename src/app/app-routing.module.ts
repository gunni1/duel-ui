import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AvatarDetailComponent} from "./avatar/avatar-detail/avatar-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ListAvatarsComponent} from "./avatar/list-avatars/list-avatars.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes =  [
  {path: 'login', component: LoginComponent},
  {path: 'avatars', component: ListAvatarsComponent},
  {path: 'avatar/:id', component: AvatarDetailComponent},
  //{path: '', redirectTo: '/login'},
  //{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: []
})
export class AppRoutingModule { }
