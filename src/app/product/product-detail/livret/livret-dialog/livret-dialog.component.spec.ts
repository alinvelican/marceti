import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivretDialogComponent } from './livret-dialog.component';

describe('LivretDialogComponent', () => {
  let component: LivretDialogComponent;
  let fixture: ComponentFixture<LivretDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivretDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivretDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
