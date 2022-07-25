import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRequestTableComponent } from './approval-request-table.component';

describe('ApprovalRequestTableComponent', () => {
  let component: ApprovalRequestTableComponent;
  let fixture: ComponentFixture<ApprovalRequestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalRequestTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
