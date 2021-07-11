import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../security/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authenticationService: AuthService) {
  }

  /**
   * @function canActivate() retorna verdadero en caso de que exista una sesión activa,
   * en caso contrario retorna falso
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {(Observable<boolean> | Promise<boolean> | boolean)}
   * @memberof AuthGuard
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const currentToken = this.authenticationService.currentToken;
    if (currentToken) {
      return true;
    }

    this.router.navigate(['/security/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
