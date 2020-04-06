import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdereComponent } from './ardere.component';

describe('ArdereComponent', () => {
  let component: ArdereComponent;
  let fixture: ComponentFixture<ArdereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArdereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArdereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
