/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mall1Component } from './mall1.component';

describe('Mall1Component', () => {
  let component: Mall1Component;
  let fixture: ComponentFixture<Mall1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mall1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mall1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
