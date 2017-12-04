import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProzorecDetailComponent } from './prozorec-detail.component';

describe('ProzorecDetailComponent', () => {
  let component: ProzorecDetailComponent;
  let fixture: ComponentFixture<ProzorecDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProzorecDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProzorecDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
