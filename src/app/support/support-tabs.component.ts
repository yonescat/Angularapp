import { Component, Input } from '@angular/core';
import { Support } from '../shared/models/support.model';


@Component({
  selector: 'ndp-support-tabs',
  templateUrl: './support-tabs.component.html'
})
export class SupportTabsComponent {

  @Input() support: Support;

}


