import { Component, OnInit } from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  submitted = false

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true
    //TODO: Daten laden
  }

  user = new User('')
}
