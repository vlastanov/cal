import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProzorciComponent } from './prozorci.component';

describe('ProzorciComponent', () => {
  let component: ProzorciComponent;
  let fixture: ComponentFixture<ProzorciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProzorciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProzorciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
