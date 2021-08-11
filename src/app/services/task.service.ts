import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API } from '../utils/requests/api';
import { Task, TaskResponse } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TaskService extends API<Task>{

    protected URL = `${this.URL_API}tasks/`;

    constructor(
        protected http: HttpClient
    ) {
        super(http);
    }

    getAllTask(params?: {}): Observable<TaskResponse> {
        return this.http.get<TaskResponse>(this.URL, { params });
    }
}