/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PurpuseComponent } from './purpuse.component';

describe('PurpuseComponent', () => {
  let component: PurpuseComponent;
  let fixture: ComponentFixture<PurpuseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurpuseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurpuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
