import { Component, OnInit } from '@angular/core';
import {Avatar} from "../avatar";

@Component({
  selector: 'app-list-avatars',
  templateUrl: './list-avatars.component.html',
  styleUrls: ['./list-avatars.component.css']
})
export class ListAvatarsComponent implements OnInit {

  //Bekommt ein User-Objekt, läd Daten vom Server und zeigt sie an
  //onChange für Userobjekt zum Re-Initialisieren

  avatars: Avatar[] = [
    {id: "1", name: "Hans", agi: 1, str: 1, dex: 1, end: 1, perc: 1},
    {id: "2", name: "Peter", agi: 2, str: 2, dex: 2, end: 2, perc: 2}
  ];

  selectedAvatar: Avatar;

  constructor() { }

  ngOnInit() {
  }


  onSelect(avatar: Avatar) {
    this.selectedAvatar = avatar;
  }
}
