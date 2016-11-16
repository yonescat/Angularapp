import { Component, Input } from '@angular/core';

@Component({
  selector: 'ndp-node-tabs',
  templateUrl: './node-tabs.component.html'
})
export class NodeTabsComponent {

  @Input() node: Node;

}
