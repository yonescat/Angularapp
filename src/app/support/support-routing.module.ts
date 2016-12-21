import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../shared/services/auth.guard';

import { SupportListComponent } from './support-list.component';
import { SupportViewComponent } from './support-view.component';
import { SupportEditComponent } from './support-edit.component';
import { SupportDeleteComponent } from './support-delete.component';
import { SupportResolver }   from './support.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: SupportListComponent
  },
  {
    path: 'new',
    component: SupportEditComponent,
    canActivate: [AuthGuard]
  },
  { path: ':nid',
    resolve: {
      support: SupportResolver
    },
    children: [
      { path: 'edit',
        component: SupportEditComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'delete',
        component: SupportDeleteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'view'
      },
      {
        path: 'view',
        component: SupportViewComponent
       }
     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ SupportResolver ]
})
export class SupportRoutingModule { }
