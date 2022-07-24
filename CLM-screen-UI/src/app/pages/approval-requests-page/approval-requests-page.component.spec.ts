import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalRequestsPageComponent } from './approval-requests-page.component';

describe('ApprovalRequestsPageComponent', () => {
  let component: ApprovalRequestsPageComponent;
  let fixture: ComponentFixture<ApprovalRequestsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalRequestsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprovalRequestsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
