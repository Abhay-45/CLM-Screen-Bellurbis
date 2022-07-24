import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-new-investor-form',
  templateUrl: './add-new-investor-form.component.html',
  styleUrls: ['./add-new-investor-form.component.css']
})
export class AddNewInvestorFormComponent implements OnInit {
  faCheck = faCheck;
  constructor() { }

  ngOnInit(): void {
  }

}
