import { Component, OnInit } from '@angular/core';
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faClock , faHandPaper} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  faYoutube = faYoutube;
  faClock = faClock;
  faHandPaper = faHandPaper;

  constructor() { }

  ngOnInit(): void {
  }

}
