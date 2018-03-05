/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GivenpaginateComponent } from './givenpaginate.component';

describe('GivenpaginateComponent', () => {
  let component: GivenpaginateComponent;
  let fixture: ComponentFixture<GivenpaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivenpaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivenpaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
