import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { APP_CONFIG, DEFAULT_APP_CONFIG } from '../../../app-configs/app.config';
import { SupportService } from './support.service';
import { SupportRoutingModule } from './support-routing.module';
import { SupportListComponent } from './support-list.component';
import { SupportViewComponent } from './support-view.component';
import { SupportEditComponent } from './support-edit.component';
import { SupportDeleteComponent } from './support-delete.component';
import { SupportTabsComponent } from './support-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SupportRoutingModule
  ],
  declarations: [
    
    SupportListComponent,
    SupportViewComponent,
    SupportEditComponent,
    SupportDeleteComponent,
    SupportTabsComponent
  ],
  providers: [
    SupportService,
    { provide: APP_CONFIG, useValue: DEFAULT_APP_CONFIG }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SupportModule { }
