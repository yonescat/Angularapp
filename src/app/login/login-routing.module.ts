import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthService } from '../shared/services/auth.service';
import { NoAuthGuard } from '../shared/services/no-auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [NoAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class LoginRoutingModule { }
