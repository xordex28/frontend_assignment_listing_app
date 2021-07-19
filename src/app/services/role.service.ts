import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { API } from '../utils/requests/api';
import { Role, PermitApproved } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RoleService extends API<Role>{

    protected URL = `${this.URL_API}users/roles/`;

    constructor(
        protected http: HttpClient
    ) {
        super(http);
    }

    assingPermits(id: string, permits: PermitApproved[]): Observable<Role> {
        return this.http.post<Role>(`${URL}${id}/canApproven`, permits);
    }
}
