import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API } from '../utils/requests/api';
import { Client } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends API<Client>{

  protected URL = `${this.URL_API}clients/`;

  constructor(
      protected http: HttpClient
  ) {
      super(http);
  }
}