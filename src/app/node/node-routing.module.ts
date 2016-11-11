import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../shared/services/auth.guard';

import { NodeListComponent } from './node-list.component';
import { NodeViewComponent } from './node-view.component';
import { NodeEditComponent } from './node-edit.component';
import { NodeDeleteComponent } from './node-delete.component';
import { NodeResolver }   from './node.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component: NodeListComponent
  },
  {
    path: 'new',
    component: NodeEditComponent,
    canActivate: [AuthGuard]
  },
  { path: ':id',
    resolve: {
      node: NodeResolver
    },
    children: [
      { path: 'edit',
        component: NodeEditComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'delete',
        component: NodeDeleteComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: 'view'
      },
      {
        path: 'view',
        component: NodeViewComponent
       }
     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ NodeResolver ]
})
export class NodeRoutingModule { }
