import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-investors-criteria',
  templateUrl: './investors-criteria.component.html',
  styleUrls: ['./investors-criteria.component.css']
})
export class InvestorsCriteriaComponent implements OnInit {
 faPlus = faPlus;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToInvestorForm() {
    this.router.navigate(['add-new-investor'])
  }

}
