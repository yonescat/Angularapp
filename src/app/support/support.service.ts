import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../shared/services/api.service';
import { APP_CONFIG, AppConfig } from '../../../app-configs/app.config';
import { Support } from '../shared/models/support.model';

@Injectable()
export class SupportService {

  support: Support;
  sub: Subscription;
  private supports_path: string;
  private support_path: string;
  private new_support_path: string ;
  private request_format: string;

  constructor(
    private http: Http,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(APP_CONFIG) config: AppConfig

  ) {
    this.supports_path = config.apiSupportsPath;
    this.support_path = config.apiSupportPath;
    this.new_support_path = config.apiNewSupportPath;
    this.request_format = config.apiRequestFormat;
   }

  getSupports(term?: any) {
    return this.api.get(`${this.supports_path}${this.request_format}`, term);
  }

  getSupport(id: number) {
    // Use the REST View with Id contextual filter
    // as the REST GET seems broken
    // @see https://www.drupal.org/node/2772537
    //return this.api.get(`${this.support_path}/${id}${this.request_format}`);
    return this.api.get(`${this.supports_path}/${id}`);
  }

  // Map the node data from REST response.
  getSupportData(support: Object): Support {
    // Use the REST View with Id contextual filter
    // @see getNode comments.
    //let created = node[0]['created'];
    //node[0]['created'] = Date.parse(created);
    return support[0];
    /*
    // Date mappping for REST data provided.
    let created = new Date(node['created'][0]['value'] * 1000);
    return {
      id: node['nid'][0]['value'],
      title: node['title'][0]['value'],
      imgURL: '',
      content: node['body'][0]['value'],
      created: created,
      _links: node['_links']
    };
    */
  }

  newSupportData(): Support {
    return {
     
  nid: 0,
  title: '',
  field_attachments: '',
  content: '',
  _links: '',
  field_department:'',
  field_priority: '',
  mail: '',
  name: '',
  field_status: '',
  field_message: ""
    };
  }

  createSupport(data: Object): Observable<Response> {
    console.log('saving Support:' + data);
    return this.api.post(`${this.new_support_path}`, data);
  }

  updateSupport(nid: number, data: Object): Observable<Response> {
    console.log('updating post:' + data);
    return this.api.patch(`${this.support_path}/${nid}${this.request_format}`, data);
  }

  finishSaveSupport(response, data) {
    // Delete Authorization header and Redirect to list.
    this.afterSupportOperation();
  }

  afterSupportOperation() {
    // We need to delete the 'Authorization header'.
    this.api.deleteHeader('Authorization');
    this.router.navigate(['support']);
  }

  deleteSupport(id: number) {
    return this.api.delete(`${this.support_path}/${id}${this.request_format}`);
  }

}
