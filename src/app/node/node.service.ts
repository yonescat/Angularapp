import { Injectable, Inject} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiService } from '../shared/services/api.service';
import { APP_CONFIG, AppConfig } from '../../../app-configs/app.config';
import { Node } from '../shared/models/node.model';

@Injectable()
export class NodeService {

  node: Node;
  sub: Subscription;
  private nodes_path: string;
  private node_path: string;
  private new_node_path: string ;
  private request_format: string;

  constructor(
    private http: Http,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(APP_CONFIG) config: AppConfig

  ) {
    this.nodes_path = config.apiNodesPath;
    this.node_path = config.apiNodePath;
    this.new_node_path = config.apiNewNodePath;
    this.request_format = config.apiRequestFormat;
   }

  getNodes(term?: any) {
    return this.api.get(`${this.nodes_path}${this.request_format}`, term);
  }

  getNode(id: number) {
    // Use the REST View with Id contextual filter
    // as the REST GET seems broken
    // @see https://www.drupal.org/node/2772537
    //return this.api.get(`${this.node_path}/${id}${this.request_format}`);
    return this.api.get(`${this.nodes_path}/${id}`);
  }

  // Map the node data from REST response.
  getNodeData(node: Object): Node {
    // Use the REST View with Id contextual filter
    // @see getNode comments.
    //let created = node[0]['created'];
    //node[0]['created'] = Date.parse(created);
    return node[0];
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

  newNodeData(): Node {
    return {
      id: 0,
      title: '',
      imgURL: '',
      content: '',
      _links: ''
    };
  }

  createNode(data: Object): Observable<Response> {
    console.log('saving node:' + data);
    return this.api.post(`${this.new_node_path}`, data);
  }

  updateNode(id: number, data: Object): Observable<Response> {
    console.log('updating post:' + data);
    return this.api.patch(`${this.node_path}/${id}${this.request_format}`, data);
  }

  finishSaveNode(response, data) {
    // Delete Authorization header and Redirect to list.
    this.afterNodeOperation();
  }

  afterNodeOperation() {
    // We need to delete the 'Authorization header'.
    this.api.deleteHeader('Authorization');
    this.router.navigate(['nodes']);
  }

  deleteNode(id: number) {
    return this.api.delete(`${this.node_path}/${id}${this.request_format}`);
  }

}
