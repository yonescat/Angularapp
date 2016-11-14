import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_CONFIG, DEFAULT_APP_CONFIG } from '../../../app-configs/app.config';
import { NodeService } from './node.service';
import { NodeRoutingModule } from './node-routing.module';
import { NodeListComponent } from './node-list.component';
import { NodeViewComponent } from './node-view.component';
import { NodeEditComponent } from './node-edit.component';
import { NodeDeleteComponent } from './node-delete.component';
import { NodeTabsComponent } from './node-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NodeRoutingModule
  ],
  declarations: [
    NodeListComponent,
    NodeViewComponent,
    NodeEditComponent,
    NodeDeleteComponent,
    NodeTabsComponent
  ],
  providers: [
    NodeService,
    { provide: APP_CONFIG, useValue: DEFAULT_APP_CONFIG }
  ],
})
export class NodeModule { }
