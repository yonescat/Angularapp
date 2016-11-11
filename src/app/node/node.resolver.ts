import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Node } from '../shared/models/node.model';
import { NodeService } from './node.service';

@Injectable()
export class NodeResolver implements Resolve<Node> {

  constructor(private nodeService: NodeService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    if (route.params['id']) {
      let id = +route.params['id'];
      let node_res = this.nodeService.getNode(id);
      // Check for valid response.
      node_res.subscribe((res: Array<any>) => {
        if (res.length === 0) {
          // No node found, redirect to list.
          this.router.navigate(['nodes']);
        }
      });
      return node_res;
    } else {
      this.router.navigate(['nodes']);
    }
  }
}
