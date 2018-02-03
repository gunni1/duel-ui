import { Component } from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() { }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    //TODO: Daten laden
  }

  model = new User('');
}
