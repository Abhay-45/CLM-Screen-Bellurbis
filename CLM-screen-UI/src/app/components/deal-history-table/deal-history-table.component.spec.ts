import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealHistoryTableComponent } from './deal-history-table.component';

describe('DealHistoryTableComponent', () => {
  let component: DealHistoryTableComponent;
  let fixture: ComponentFixture<DealHistoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealHistoryTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
