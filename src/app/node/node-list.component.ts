import { Component, OnInit, OnDestroy } from '@angular/core';
import { NodeService } from './node.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ndp-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.css']
})
export class NodeListComponent implements OnInit, OnDestroy {
  q: string = '';
  nodes: Node[];
  sub: Subscription;

  constructor(private nodeService: NodeService) {}

  search() {
    this.sub = this.nodeService.getNodes({ q: this.q }).subscribe(
      res => this.nodes = res
    );
  }

  ngOnInit() {
    this.search();
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
