import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRecordModalComponent } from './sales-record-modal.component';

describe('SalesRecordModalComponent', () => {
  let component: SalesRecordModalComponent;
  let fixture: ComponentFixture<SalesRecordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesRecordModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRecordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
