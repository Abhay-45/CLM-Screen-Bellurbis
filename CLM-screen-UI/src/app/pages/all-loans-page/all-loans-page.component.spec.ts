import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLoansPageComponent } from './all-loans-page.component';

describe('AllLoansPageComponent', () => {
  let component: AllLoansPageComponent;
  let fixture: ComponentFixture<AllLoansPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLoansPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLoansPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
