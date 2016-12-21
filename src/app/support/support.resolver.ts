import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Support } from '../shared/models/support.model';
import { SupportService } from './support.service';

@Injectable()
export class SupportResolver implements Resolve<Support> {

  constructor(private supportService: SupportService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    if (route.params['nid']) {
      let nid = +route.params['nid'];
      let support_res = this.supportService.getSupport(nid);
      // Check for valid response.
      support_res.subscribe((res: Array<any>) => {
        if (res.length === 0) {
          // No support found, redirect to list.
          this.router.navigate(['support']);
        }
      });
      return support_res;
    } else {
      this.router.navigate(['support']);
    }
  }
}
