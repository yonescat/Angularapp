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
  filteredNodes: Node[];
  sub: Subscription;

  public totalItems: number;
  public currentPage: number = 1;
  public pageSize: number = 10;

  constructor(private nodeService: NodeService) {}

  search() {
    this.sub = this.nodeService.getNodes({ q: this.q })
      .subscribe(
        res => {
          this.nodes = this.filteredNodes = res;
          this.totalItems = this.nodes.length;
        }
    );
  }

  ngOnInit() {
    this.search();
  }

  filterChanged(data: string) {
    if (data && this.nodes) {
        data = data.toUpperCase();
        //let props = ['title', 'content'];
        let props = ['title'];
        let filtered = this.nodes.filter(item => {
            let match = false;
            for (let prop of props) {
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                  match = true;
                  break;
                }
            };
            return match;
        });
        this.filteredNodes = filtered;
        this.totalItems = this.filteredNodes.length;
    } else {
      this.filteredNodes = this.nodes;
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
