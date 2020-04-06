import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilizatorDialogComponent } from './utilizator-dialog.component';

describe('UtilizatorDialogComponent', () => {
  let component: UtilizatorDialogComponent;
  let fixture: ComponentFixture<UtilizatorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilizatorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilizatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
