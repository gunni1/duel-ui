import {Component, Input, OnInit} from '@angular/core';
import {Avatar} from "../avatar";
import {ActivatedRoute} from "@angular/router";
import {AvatarService} from "../avatar.service";

@Component({
  selector: 'app-avatar-detail',
  templateUrl: './avatar-detail.component.html',
  styleUrls: ['./avatar-detail.component.css']
})
export class AvatarDetailComponent implements OnInit {

  constructor(

  ) { }

  @Input()
  avatar: Avatar;

  ngOnInit() {
  }

}
