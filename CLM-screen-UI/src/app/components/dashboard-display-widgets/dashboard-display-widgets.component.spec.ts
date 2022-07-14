import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDisplayWidgetsComponent } from './dashboard-display-widgets.component';

describe('DashboardDisplayWidgetsComponent', () => {
  let component: DashboardDisplayWidgetsComponent;
  let fixture: ComponentFixture<DashboardDisplayWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDisplayWidgetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDisplayWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
