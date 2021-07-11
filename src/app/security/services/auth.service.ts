import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API } from '../../utils/requests/api';
import { User } from '../../models/models';

import { throwError, of, BehaviorSubject, Observable, Observer } from 'rxjs';

import { map, publishReplay, refCount, catchError, retry, share } from 'rxjs/operators';
import * as moment from 'moment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService extends API<User> {
  protected URL = `${this.URL_API}users/users/`;
  protected URL_AUTH = `${this.URL_API}users/`;
  private user_actual: BehaviorSubject<User> = new BehaviorSubject(null);
  private $actual: Observable<User>;

  constructor(
    protected http: HttpClient,
    private router: Router
  ) {
    super(http);
  }

  public get getUser(): BehaviorSubject<User> {
    return this.user_actual;
  }

  public login(email: string, password: string) {
    return this.http
      .post(`${this.URL_AUTH}authenticate/`, {
        username: email,
        password
      })
      .pipe(
        map((response: User) => {
          localStorage.setItem(API.NAME, (response.firstName + ' ' + response.lastName));
          localStorage.setItem(API.EMAIL, email);
          localStorage.setItem(API.TOKEN, response.accesToken);
          let date = moment(new Date()).format();
          localStorage.setItem(API.DATE_LAST_TOKEN_REFRESH, date);
          console.log(API.DATE_LAST_TOKEN_REFRESH, date);

          this.user_actual.next(response);

          //this.actual().subscribe();
          return response;
        })
      );
  }

  gNewAccesToken(): Observable<string> {
    const token = localStorage.getItem(API.TOKEN);
    const username = localStorage.getItem(API.EMAIL);
    console.log('hola 2');

    return this.http.post<string>(`${this.URL_AUTH}/token`, {
      username,
      tokenRefresh: token
    })
      .pipe(
        share(),
        catchError(error => this.handleError(error))
      );
  }

  public logout() {
    return new Observable<void>((observe: Observer<void>) => {
      localStorage.removeItem(API.TOKEN);
      localStorage.removeItem(API.DATE_LAST_TOKEN_REFRESH);
      localStorage.removeItem(API.EMAIL);
      localStorage.removeItem(API.NAME);
      localStorage.clear();
      this.$actual = null;
      this.user_actual.next(null);
      this.user_actual.subscribe();
      observe.next();
      observe.complete();
      this.router.navigate(['/security/login']);
    });
  }

  public actual() {
    if (this.user_actual.value && localStorage.getItem(API.TOKEN)) {
      return this.user_actual;
    }
    this.http.get(`${this.URL}current/`).pipe(
      publishReplay(),
      refCount(),
      map((response: User) => {
        this.user_actual.next(response);
        console.log(response);
        //console.log('entro')
        return response;
      })
    );
    return this.user_actual;
  }

  public get currentToken(): String {
    const token = localStorage.getItem(API.TOKEN);
    return token;
  }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      console.error('Ha ocurrido un Error: ', error.message);
    } else {
      console.error(`Backend retornó el siguiente codigo: ${error.status}, ` +
        `El body fue: ${error.error}`
      );
    }

    return (throwError('Ha ocurrido un error; por favor intente mas tarde.'));
  }
}
