import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Node } from '../shared/models/node.model';
import { NodeService } from './node.service';

@Component({
  selector: 'ndp-node-edit',
  templateUrl: './node-edit.component.html'
})

export class NodeEditComponent implements OnInit {
  form_title: string;
  node: Node;
  nid: number;
  errorMessage: string;

  constructor(
    private nodeService: NodeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save() {
    let _body = {
      title: [{ value: this.node.title}],
      body: [{ value: this.node.content}],
      _links: {
          type: {
            href: "http://yonescat.co.uk/rest/type/node/article"
          }
      }
     };

    if (this.nid) {
      this.nodeService.updateNode(this.nid, _body)
        .map(res => res.json())
        .subscribe(
          response => this.nodeService.finishSaveNode(response, _body),
          error => this.errorMessage = error.json().message
        );
    } else {
        this.nodeService.createNode(_body)
        .map(res => res.json())
        .subscribe(
          response => this.nodeService.finishSaveNode(response, _body),
          error => this.errorMessage = error.json().message
        );
    }
  }

  ngOnInit() {
    if (this.route.snapshot.params['nid']) {
      // Use the node response data from Resolver;
      // @see node.resolver
      this.node = this.nodeService.getNodeData(this.route.snapshot.data['node']);
      this.nid = this.node.nid;
      this.form_title = 'Edit node ' + this.node.title + ' [nid:' + this.nid + ']';
    } else {
      // This for the create new node form.
      this.node = this.nodeService.newNodeData();
      this.form_title = 'Create new node';
    }
  }

}
