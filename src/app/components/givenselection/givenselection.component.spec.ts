/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GivenselectionComponent } from './givenselection.component';

describe('GivenselectionComponent', () => {
  let component: GivenselectionComponent;
  let fixture: ComponentFixture<GivenselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivenselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivenselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
