import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AparatComponent } from './aparat.component';

describe('AparatComponent', () => {
  let component: AparatComponent;
  let fixture: ComponentFixture<AparatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AparatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AparatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
