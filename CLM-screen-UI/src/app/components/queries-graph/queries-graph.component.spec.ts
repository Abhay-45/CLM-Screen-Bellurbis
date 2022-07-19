import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueriesGraphComponent } from './queries-graph.component';

describe('QueriesGraphComponent', () => {
  let component: QueriesGraphComponent;
  let fixture: ComponentFixture<QueriesGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueriesGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueriesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
