/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IntropageComponent } from './intropage.component';

describe('IntropageComponent', () => {
  let component: IntropageComponent;
  let fixture: ComponentFixture<IntropageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntropageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntropageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
