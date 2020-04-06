import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AparatDialogComponent } from './aparat-dialog.component';

describe('AparatDialogComponent', () => {
  let component: AparatDialogComponent;
  let fixture: ComponentFixture<AparatDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AparatDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AparatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
