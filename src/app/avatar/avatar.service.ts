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

  private avatarsUrl = "http://localhost:9000/avatars/1";

  getAvatars(): Observable<Avatar[]> {

    return this.http.get<Avatar[]>(this.avatarsUrl)
      .pipe(
        tap(avatars => this.log("avatars fetched")),
        catchError(this.handleError("getAvatars", []))
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
