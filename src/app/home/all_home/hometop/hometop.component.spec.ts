/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HometopComponent } from './hometop.component';

describe('HometopComponent', () => {
  let component: HometopComponent;
  let fixture: ComponentFixture<HometopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HometopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HometopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
