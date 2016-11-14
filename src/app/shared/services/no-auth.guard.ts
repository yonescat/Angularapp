
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';

@Injectable()
export class NoAuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.auth
      .ensureAuthIs(false)
      .subscribe((auth) => {
        if (!auth) {
          this.router.navigate(['']);
        }
      });
    return true;
  }
}
