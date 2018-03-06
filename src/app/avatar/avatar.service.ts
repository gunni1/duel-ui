import { Injectable } from '@angular/core';
import {Avatar} from "./avatar";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {MessageService} from "../message.service";
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class AvatarService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private avatarServiceUrl = "http://localhost:9000";

  AVATARS: Avatar[] = [
    {name: "enrico", avatarId: "1", str: 1, agi:1, end:1,dex:1,perc:1},
    {name: "jochen", avatarId: "2", str: 2, agi:2, end:2,dex:2,perc:2},
    {name: "peter", avatarId: "3", str: 3, agi:3, end:3,dex:3,perc:3}];


  /**
   * Liefert alle Avatare eines bestimmten Users identifiziert durch eine UserId.
   * @param {string} userId
   * @returns {Observable<Avatar[]>}
   */
  getAvatars(userId: string): Observable<Avatar[]> {

    const url = `${this.avatarServiceUrl}/avatars/${userId}`;
    return this.http.get<Avatar[]>(url)
      .pipe(
        tap(avatars => this.log("avatars fetched")),
        catchError(this.handleError(url, []))
    )
  }

  /**
   * Liefert einen bestimmten Avatar identifiziert durch eine avatarId.
   * @param {string} avatarId
   */
  getAvatar(avatarId: string) {
    const url = `${this.avatarServiceUrl}/avatar/${avatarId}`;
    return this.http.get<Avatar[]>(url)
      .pipe(
        tap(avatars => this.log("avatar fetched with id: ${avatarId}")),
        catchError(this.handleError(url, []))
      )
  }

  private log(message: string) {
    this.messageService.add(message)
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
