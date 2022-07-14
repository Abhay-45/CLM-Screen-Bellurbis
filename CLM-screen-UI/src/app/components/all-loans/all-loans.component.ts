import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-loans',
  templateUrl: './all-loans.component.html',
  styleUrls: ['./all-loans.component.css']
})
export class AllLoansComponent implements OnInit {
  panelOpenState = false;
  constructor() { }
  ngOnInit(): void {
  }

}
