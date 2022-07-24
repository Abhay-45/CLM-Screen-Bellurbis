import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upload-loans-body',
  templateUrl: './upload-loans-body.component.html',
  styleUrls: ['./upload-loans-body.component.css']
})
export class UploadLoansBodyComponent implements OnInit {
  faPen = faPen;
  faArrow = faArrowUp;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLoanForm() {
    this.router.navigate(['create-new-loan-form'])
  }

}
