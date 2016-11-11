import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Node } from '../shared/models/node.model';
import { NodeService } from './node.service';

@Component({
  selector: 'ndp-node-delete',
  templateUrl: './node-delete.component.html',
  styleUrls: ['./node-delete.component.css']
})
export class NodeDeleteComponent implements OnInit {
  form_title: string;
  node: Node;
  id: number;
  errorMessage: string;

  constructor(
    private nodeService: NodeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  delete() {
    if (this.id) {
      this.nodeService.deleteNode(this.id)
        .subscribe(() => {
          this.nodeService.afterNodeOperation();
        });
    }
  }

  ngOnInit() {
    // Use the node response data from Resolver;
    // @see node.resolver
    this.node = this.nodeService.getNodeData(this.route.snapshot.data['node']);
    this.id = this.node.id;
    this.form_title = 'Delete node ' + this.node.title + ' [id:' + this.id + ']';

  }

}
