import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablicaComponent } from './tablica.component';

describe('TablicaComponent', () => {
  let component: TablicaComponent;
  let fixture: ComponentFixture<TablicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
