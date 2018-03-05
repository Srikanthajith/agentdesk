/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GivenlistjsonComponent } from './givenlistjson.component';

describe('GivenlistjsonComponent', () => {
  let component: GivenlistjsonComponent;
  let fixture: ComponentFixture<GivenlistjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GivenlistjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GivenlistjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
