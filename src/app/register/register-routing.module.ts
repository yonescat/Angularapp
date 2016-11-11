import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import { AuthService } from '../shared/services/auth.service';
import { NoAuthGuard } from '../shared/services/no-auth.guard';

const routes: Routes = [
  { path: '', component: RegisterComponent, canActivate: [NoAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class RegisterRoutingModule { }
