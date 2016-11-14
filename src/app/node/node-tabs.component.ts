import { Component, Input } from '@angular/core';

@Component({
  selector: 'ndp-node-tabs',
  templateUrl: './node-tabs.component.html',
  styleUrls: ['./node-tabs.component.css']
})
export class NodeTabsComponent {

  @Input() node: Node;

}
