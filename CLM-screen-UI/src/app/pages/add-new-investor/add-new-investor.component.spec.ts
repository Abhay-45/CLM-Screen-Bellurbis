import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewInvestorComponent } from './add-new-investor.component';

describe('AddNewInvestorComponent', () => {
  let component: AddNewInvestorComponent;
  let fixture: ComponentFixture<AddNewInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewInvestorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
