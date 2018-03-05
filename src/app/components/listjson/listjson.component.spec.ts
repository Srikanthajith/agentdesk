/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListjsonComponent } from './listjson.component';

describe('ListjsonComponent', () => {
  let component: ListjsonComponent;
  let fixture: ComponentFixture<ListjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
