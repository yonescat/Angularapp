import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Support } from '../shared/models/support.model';
import { SupportService } from './support.service';

@Component({
  selector: 'ndp-support-delete',
  templateUrl: './support-delete.component.html'
})
export class SupportDeleteComponent implements OnInit {
  form_title: string;
  support: Support;
  nid: number;
  errorMessage: string;

  constructor(
    private supportService: SupportService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  delete() {
    if (this.nid) {
      this.supportService.deleteSupport(this.nid)
        .subscribe(() => {
          this.supportService.afterSupportOperation();
        });
    }
  }

  ngOnInit() {
    // Use the support response data from Resolver;
    // @see support.resolver
    this.support = this.supportService.getSupportData(this.route.snapshot.data['support']);
    this.nid = this.support.nid;
    this.form_title = 'Delete support ' + this.support.title + ' [nid:' + this.nid + ']';

  }

}
