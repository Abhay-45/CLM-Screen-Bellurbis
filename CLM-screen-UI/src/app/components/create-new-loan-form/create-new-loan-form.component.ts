import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-create-new-loan-form',
  templateUrl: './create-new-loan-form.component.html',
  styleUrls: ['./create-new-loan-form.component.css']
})
export class CreateNewLoanFormComponent implements OnInit {
  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
