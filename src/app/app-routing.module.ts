import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AvatarDetailComponent} from "./avatar/avatar-detail/avatar-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ListAvatarsComponent} from "./avatar/list-avatars/list-avatars.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";

const appRoutes: Routes =  [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'avatars', component: ListAvatarsComponent},
  {path: 'avatar/:avatarId', component: AvatarDetailComponent},
  {path: 'avatar/:avatarId/dashboard', component: DashboardComponent},

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
