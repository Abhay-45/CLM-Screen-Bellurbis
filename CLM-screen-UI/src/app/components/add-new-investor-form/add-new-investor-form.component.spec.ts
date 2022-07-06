import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewInvestorFormComponent } from './add-new-investor-form.component';

describe('AddNewInvestorFormComponent', () => {
  let component: AddNewInvestorFormComponent;
  let fixture: ComponentFixture<AddNewInvestorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewInvestorFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewInvestorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
