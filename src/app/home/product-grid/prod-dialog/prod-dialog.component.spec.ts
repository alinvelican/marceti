import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDialogComponent } from './prod-dialog.component';

describe('ProdDialogComponent', () => {
  let component: ProdDialogComponent;
  let fixture: ComponentFixture<ProdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
