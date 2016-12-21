import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { SupportService } from './support.service';
import { Support } from '../shared/models/support.model';

@Component({
  selector: 'ndp-support-view',
  templateUrl: './support-view.component.html'
})
export class SupportViewComponent implements OnInit {

  nid: number;
  support: Support;

  constructor(private supportService: SupportService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // Use the support response data from Resolver;
    // @see support.resolver
    this.support = this.supportService.getSupportData(this.route.snapshot.data['support']);
    this.nid = this.support.nid;
  }

}
