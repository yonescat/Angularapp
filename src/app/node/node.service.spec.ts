/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule, BaseRequestOptions, Http, Response, ResponseOptions } from '@angular/http';
import { Observable} from 'rxjs/Rx';

import { ApiService } from './api.service';
import { NodeService } from './node.service';

const nodes = [
  {
    id: 1,
    title: 'Getting started with REST',
    content: 'Content of Getting started with REST',
    createdAt: '9/22/16 4:15 PM'
  },
  {
    id: 2,
    title: 'Getting started with AngularJS 1.x',
    content: 'Content of Getting started with AngularJS 1.x',
    createdAt: '9/22/16 4:15 PM'
  },
  {
    id: 3,
    title: 'Getting started with Angular2',
    content: 'Content of Getting started with Angular2',
    createdAt: '9/22/16 4:15 PM'
  },
];

class ApiServiceStub {
  get(path) {
    return Observable.of(nodes);
  }
}

describe('Service: Node', () => {
  let apiService: ApiService;
  let postService: NodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [{ provide: ApiService, useValue: new ApiServiceStub() }, NodeService]
    });
  });

  beforeEach(inject([ApiService, NodeService], (_apiService, _postService) => {
    apiService = _apiService;
    postService = _postService;
  }));

  it('should not be null...', () => {
    expect(postService).toBeTruthy();
  });

  it('should get nodes...', async(() => {
    postService.getNodes()
      .subscribe(res => {
        expect(res).toEqual(nodes);
      });
  }));

});
