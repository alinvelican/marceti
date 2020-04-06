import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizatorComponent } from './utilizator.component';

describe('UtilizatorComponent', () => {
  let component: UtilizatorComponent;
  let fixture: ComponentFixture<UtilizatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilizatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
