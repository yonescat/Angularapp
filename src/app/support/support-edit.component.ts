import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Support } from '../shared/models/support.model';
import { SupportService } from './support.service';

@Component({
  selector: 'ndp-support-edit',
  templateUrl: './support-edit.component.html',
})

export class SupportEditComponent implements OnInit {
  form_title: string;
  support: Support;
  nid: number;
  errorMessage: string;
   private status = ['Pending','Assigned','Closed'];
   private priority = ['Normal','Important', 'Urgent'];
   private department = ['IT','Sales','Marketing','Accounting'];
   constructor(
    private supportService: SupportService,
    private router: Router,
    private route: ActivatedRoute,
    
  ) { 


  }

  save() {
    let _body = {

      _links: {
          type: {
            href: "http://yonescat.co.uk/rest/type/node/support_tickets"
          }
      },
      title: [{ value: this.support.title}],
      field_message: [{ value: this.support.field_message}],
      field_status: [{value: this.support.field_status}],
      field_priority:[{value: this.support.field_priority}],
      field_department: [{value: this.support.field_department}]


     };

    if (this.nid) {
      this.supportService.updateSupport(this.nid, _body)
        .map(res => res.json())
        .subscribe(
          response => this.supportService.finishSaveSupport(response, _body),
          error => this.errorMessage = error.json().message
        );
    } else {
        this.supportService.createSupport(_body)
        .map(res => res.json())
        .subscribe(
          response => this.supportService.finishSaveSupport(response, _body),
          error => this.errorMessage = error.json().message
        );
    }
  }

  ngOnInit() {
    if (this.route.snapshot.params['nid']) {
      // Use the node response data from Resolver;
      // @see node.resolver
      this.support = this.supportService.getSupportData(this.route.snapshot.data['support']);
      this.nid = this.support.nid;
      this.form_title = 'Edit support ' + this.support.title + ' [nid:' + this.nid + ']';
    } else {
      // This for the create new node form.
      this.support = this.supportService.newSupportData();
      this.form_title = 'Create new support';
    }
  }

}
