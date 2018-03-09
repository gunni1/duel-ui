import { Component, OnInit } from '@angular/core';
import {AvatarService} from "../avatar/avatar.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Avatar} from "../avatar/avatar";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private avatarService: AvatarService,
    private location: Location
    ) { }

    selectedAvatar: Avatar

  ngOnInit() {
    this.getAvatar()
  }

  private getAvatar() {
    const avatarId = this.route.snapshot.paramMap.get('avatarId')
    this.avatarService.getAvatar(avatarId).subscribe(avatar => this.selectedAvatar = avatar)
  }
}
