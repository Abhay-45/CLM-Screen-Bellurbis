import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadLoansBodyComponent } from './upload-loans-body.component';

describe('UploadLoansBodyComponent', () => {
  let component: UploadLoansBodyComponent;
  let fixture: ComponentFixture<UploadLoansBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadLoansBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadLoansBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
