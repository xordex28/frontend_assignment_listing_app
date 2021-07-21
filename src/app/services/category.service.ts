import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API } from '../utils/requests/api';
import { Category } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryService extends API<Category>{

    protected URL = `${this.URL_API}categories/`;

    constructor(
        protected http: HttpClient
    ) {
        super(http);
    }

    getCategoryByName(name: string): Observable<Category> {
        return this.http.get<Category>(`${this.URL}match/${name}`);
      }
}
