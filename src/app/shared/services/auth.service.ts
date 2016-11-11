import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ApiService } from './api.service';
import { User } from '../models/user.model';

interface State {
  current: User;
  desiredUrl: string;
}

const defaultState: State = {
  current: null,
  desiredUrl: null
};

const _store = new BehaviorSubject<State>(defaultState);

class Store {
  _store = _store;
  changes = this._store.distinctUntilChanged();

  setState(state: State) {
    this._store.next(Object.assign({}, this.getState(), state));
  }

  getState() {
    return this._store.value;
  }

  purge() {
    this._store.next(defaultState);
  }

}

@Injectable()
export class AuthService {
  _current: User = null;
  currentStore: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  desiredUrl: string = null;
  errorMessage: string;

  constructor(
    private http: Http,
    private api: ApiService,
    private router: Router
  ) { }

  attempAuth(type: string, credentials): Observable<Response> {
    let path = (type === 'login') ? '/login?_format=json' : '/register';
    let url = '/user' + path;

    return this.api.post(url, credentials, false);
  }

  finishAuth(res, credentials) {
    // Save the user data into LocalStorage.
    this._current = res.current_user;
    localStorage.setItem('currentUser', res.current_user);
    let basic_auth = btoa(credentials.name + ':' + credentials.pass);
    localStorage.setItem('basic_auth', basic_auth);
    this.currentStore.next(res.current_user);

    if (this.desiredUrl && !this.desiredUrl.startsWith('/login')) {
      this.router.navigateByUrl(this.desiredUrl);
    } else {
      this.router.navigate(['']);
    }
  }

  ensureAuthIs(b: boolean): Observable<boolean> {
    const auth = new BehaviorSubject<boolean>(false);
    this.verifyAuth()
      .subscribe((authValid) => {
        // if it's the opposite, redirect login page.
        if (authValid !== b) {
          console.log('not authenticated.');
          auth.next(false);
        } else {
          console.log('authenticated.');
          auth.next(true);
        }
      });
    return auth.asObservable();
  }

  verifyAuth(): Observable<boolean> {
    const auth = new BehaviorSubject<boolean>(false);
    auth.next(this.getCurrentUser() !== null);
    return auth.asObservable();
  }

  logout() {
    // Reset the initial values.
    this._current = null;
    this.currentStore.next(null);
    this.desiredUrl = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('basic_auth');

    this.router.navigate(['']);
  }

  /**
   * Returns the current users from the LocalStorage.
   * @return {any} The LocalStorage item containing the current users id.
   */
  getCurrentUser(): any {
    return localStorage.getItem('currentUser');
  }

  get current(): Observable<User> {
    return this.currentStore.distinctUntilChanged();
  }

  /**
   * Returns if there is a user currently logged in.
   * @return {boolean} `true` if a user is currently logged in, otherwise `false`.
   */
  isAuth(): boolean {
    return this.getCurrentUser() !== null;
}
}
