import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_CONFIG, DEFAULT_APP_CONFIG} from '../../../app-configs/app.config';
// Shared Services
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { NoAuthGuard } from './services/no-auth.guard';
// Shared Components
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    NoAuthGuard,
    { provide: APP_CONFIG, useValue: DEFAULT_APP_CONFIG }
  ]
})
export class SharedModule { }