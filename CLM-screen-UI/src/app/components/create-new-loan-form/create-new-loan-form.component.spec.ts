import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewLoanFormComponent } from './create-new-loan-form.component';

describe('CreateNewLoanFormComponent', () => {
  let component: CreateNewLoanFormComponent;
  let fixture: ComponentFixture<CreateNewLoanFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewLoanFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewLoanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
