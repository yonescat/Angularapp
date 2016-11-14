import { Component } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'ndp-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(public auth: AuthService) {
  }

  logout() {
    this.auth.logout();
  }
}
