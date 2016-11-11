import { Injectable, Inject, OpaqueToken, Optional } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { APP_CONFIG, AppConfig } from '../../../../app-configs/app.config';

@Injectable()
export class ApiService {

  private API_URL: string;

  private headers: Headers = new Headers({
    'Content-Type': 'application/hal+json',
    'Accept': 'application/hal+json'
  });


  constructor(
    private http: Http,
    @Optional() @Inject(APP_CONFIG) config: AppConfig
  ) {
    this.API_URL = config.apiEndpoint;
  }

  public get(path: string, term?: any): Observable<any> {
    console.log('get resources from url:' + `${this.API_URL}${path}`);
    let search = new URLSearchParams();

    if (term) {
      Object.keys(term).forEach(key => search.set(key, term[key]));
    }

    return this.http.get(`${this.API_URL}${path}`, { search, headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  public post(path: string, data: any, with_auth = true): Observable<any> {
    let body = JSON.stringify(data);
    console.log('get resources from url:' + `${this.API_URL}${path}`);
    if (with_auth) {
      this.authHeaders();
    }
    return this.http.post(`${this.API_URL}${path}`, body, { headers: this.headers });
  }

  public patch(path: string, data: any, with_auth: boolean = true): Observable<any> {
    let body = JSON.stringify(data);
    console.log('get resources from url:' + `${this.API_URL}${path}`);
    if (with_auth) {
      this.authHeaders();
    }
    return this.http.patch(`${this.API_URL}${path}`, body, { headers: this.headers });
  }

  public put(path: string, data: any): Observable<any> {
    let body = JSON.stringify(data);

    return this.http.put(`${this.API_URL}${path}`, body, { headers: this.headers });
  }

  public delete(path: string): Observable<any> {
    this.authHeaders();
    return this.http.delete(`${this.API_URL}${path}`, { headers: this.headers });
  }

  public setHeaders(headers) {
    Object.keys(headers).forEach(header => this.headers.set(header, headers[header]));
  }

  public authHeaders() {
    let basic_auth = localStorage.getItem('basic_auth');
    console.log(basic_auth);
    this.setHeaders({ 'Authorization': 'Basic ' + basic_auth });
    this.setHeaders({ 'Cache-Control': 'no-cache' });
  }

  public setHeader(key: string, value: string) {
    this.headers.set(key, value);
  }

  public deleteHeader(key: string) {
    if (this.headers.has(key)) {
      this.headers.delete(key);
    } else {
      console.log(`header:${key} not found!`);
    }
  }

  private extractData(res: Response): Array<any> | any {
    if (res.status >= 200 && res.status <= 300) {
      return res.json() || {};
    }

    return res;
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    // let errMsg = (error.message) ? error.message :
    //   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    // console.error(errMsg); // log to console instead
    console.log(error);
    return Observable.throw(error);
  }

}

