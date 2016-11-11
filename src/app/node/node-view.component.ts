import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NodeService } from './node.service';
import { Node } from '../shared/models/node.model';

@Component({
  selector: 'ndp-node-view',
  templateUrl: './node-view.component.html'
})
export class NodeViewComponent implements OnInit {

  id: number;
  node: Node;

  constructor(private nodeService: NodeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Use the node response data from Resolver;
    // @see node.resolver
    this.node = this.nodeService.getNodeData(this.route.snapshot.data['node']);
    this.id = this.node.id;
  }

}
