import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Node } from '../shared/models/node.model';
import { NodeService } from './node.service';

@Component({
  selector: 'ndp-node-delete',
  templateUrl: './node-delete.component.html'
})
export class NodeDeleteComponent implements OnInit {
  form_title: string;
  node: Node;
  nid: number;
  errorMessage: string;

  constructor(
    private nodeService: NodeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  delete() {
    if (this.nid) {
      this.nodeService.deleteNode(this.nid)
        .subscribe(() => {
          this.nodeService.afterNodeOperation();
        });
    }
  }

  ngOnInit() {
    // Use the node response data from Resolver;
    // @see node.resolver
    this.node = this.nodeService.getNodeData(this.route.snapshot.data['node']);
    this.nid = this.node.nid;
    this.form_title = 'Delete node ' + this.node.title + ' [id:' + this.nid + ']';

  }

}
