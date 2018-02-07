import { Component, OnInit } from '@angular/core';
import {Avatar} from "../avatar";
import {AvatarService} from "../avatar.service";

@Component({
  selector: 'app-list-avatars',
  templateUrl: './list-avatars.component.html',
  styleUrls: ['./list-avatars.component.css']
})
export class ListAvatarsComponent implements OnInit {

  constructor(private avatarService: AvatarService) { }

  //Bekommt ein User-Objekt, läd Daten vom Server und zeigt sie an
  //onChange für Userobjekt zum Re-Initialisieren

  getAvatars() {
    this.avatarService.getAvatars().subscribe(avatars => this.avatars = avatars);
  }

  avatars: Avatar[]

  selectedAvatar: Avatar;

  ngOnInit() {
    this.getAvatars();
  }

}
