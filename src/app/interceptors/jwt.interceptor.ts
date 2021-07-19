import { Injectable, Injector, OnDestroy } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import Delta from "tdelta";

import { AuthService } from "../security/services/auth.service";
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs/operators';
import { API } from '../utils/requests/api';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { ModalRefreshLoginComponent } from '../utils/modal-refresh-login/modal-refresh-login.component';

@Injectable()
export class JwtInterceptor implements HttpInterceptor, OnDestroy {
    currentAuthRequest = false;

    constructor(private injector: Injector, private router: Router,
        private modalController: ModalController,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authenticationService = this.injector.get(AuthService);
        // const userService = this.injector.get(UserService);
        const token = localStorage.getItem(API.TOKEN);
        const date_last_token_refresh = localStorage.getItem(API.DATE_LAST_TOKEN_REFRESH);
        const dateLast = new Date(date_last_token_refresh);
        const dateNow = new Date();
        const diffDate = (Delta.diff(dateLast, dateNow).durationInMS / 1000);

        // if (!request.headers.has('Content-Type')) {
        //     request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
        // }
        /**
         * @conditional Si el usuario es válido, verifica si hay alguna peticion de Actualizacion
         * para el AccesToken, si no hay peticion se consulta el AccesToken el cual es retornado como
         * un observable luego se realiza el proceso de clonacion de cabeceras para enviar el
         * AccesToken al servidor
         */

        //TODO: Remplazar el vencimiento del token, levantar pantalla de Verificacion de Ingreso
        if (token) {
            // if (diffDate >= API.TOKEN_DURATION) {
            //     const service = authenticationService.gNewAccesToken();
            //     return service.pipe(
            //         switchMap((tokenAcces: string) => {
            //             localStorage.setItem(API.TOKEN, tokenAcces);
            //             const date = moment(new Date()).format();
            //             localStorage.setItem(API.DATE_LAST_TOKEN_REFRESH, date);

            //             request = request.clone({
            //                 headers: request.headers.set('Authorization', `Bearer ${tokenAcces}`)
            //             });
            //             return next.handle(request);
            //         }),
            //         catchError((error) => {
            //             authenticationService.logout().subscribe(data => {
            //                 const modal = this.modalController.create({
            //                     component: ModalRefreshLoginComponent,
            //                     componentProps: {
            //                         getTimed: 0
            //                     },
            //                     backdropDismiss: false,
            //                     mode: "md"
            //                 }).then((modal) => {
            //                     modal.present().then((currentModal) => {
            //                         console.log(currentModal);
            //                         modal.onWillDismiss().then((data) => {
            //                             if(!data.data){
            //                                 this.router.navigateByUrl('/security/login')
            //                             }
            //                         })
            //                     });
            //                 });
            //             });


            //             return throwError(error);
            //         })
            //     );
            // }
            request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
        }


        /**
         * @return En teoría solo debe ejecutarse una vez, la cual es al momento
         * en el que un usuario inicia sesión
        */
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError(error => {
                return throwError(error);
            })
        );

    }
    ngOnDestroy() {

    }
}