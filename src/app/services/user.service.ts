import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API } from '../utils/requests/api';
import { User, PermitApproved } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends API<User>{

  protected URL = `${this.URL_API}users/users/`;

  constructor(
    protected http: HttpClient
  ) {
    super(http);
  }

  assingPermits(id: string, permits: PermitApproved[]): Observable<User> {
    return this.http.post<User>(`${URL}${id}/canApproven`, permits);
  }

  getUserByUsername(username: string): Observable<User> {
    return this.http.get<User>(`${this.URL}match/${username}`);
  }
}
