import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArdereDialogComponent } from './ardere-dialog.component';

describe('ArdereDialogComponent', () => {
  let component: ArdereDialogComponent;
  let fixture: ComponentFixture<ArdereDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArdereDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArdereDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
