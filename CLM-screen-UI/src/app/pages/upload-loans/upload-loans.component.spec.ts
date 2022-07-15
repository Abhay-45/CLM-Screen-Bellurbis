import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLoansComponent } from './upload-loans.component';

describe('UploadLoansComponent', () => {
  let component: UploadLoansComponent;
  let fixture: ComponentFixture<UploadLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadLoansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
