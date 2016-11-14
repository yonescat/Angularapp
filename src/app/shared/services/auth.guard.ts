import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Injectable} from '@angular/core';

import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    this.auth
      .ensureAuthIs(true)
      .subscribe((auth) => {
        if (!auth) {
          this.auth.desiredUrl = state.url;
          this.router.navigate(['', 'login']);
        }
      });
    return true;
  }
}
