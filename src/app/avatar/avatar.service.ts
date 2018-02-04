import { Injectable } from '@angular/core';
import {Avatar} from "./avatar";

@Injectable()
export class AvatarService {

  getAvatars(): Avatar[] {
    return [
      {id: "1", name: "Hans", agi: 1, str: 1, dex: 1, end: 1, perc: 1},
      {id: "2", name: "Peter", agi: 2, str: 2, dex: 2, end: 2, perc: 2}
    ];
  }

  constructor() { }

}
