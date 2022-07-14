import { Component, Input, OnInit } from '@angular/core';
import { faClipboard, IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-dashboard-display-widgets',
  templateUrl: './dashboard-display-widgets.component.html',
  styleUrls: ['./dashboard-display-widgets.component.css']
})
export class DashboardDisplayWidgetsComponent implements OnInit {
  faClipboard = faClipboard;
  @Input() widgetIcon:IconDefinition;
  @Input() heading:string;
  @Input() totalNumber:string;
  @Input() money:string;

  constructor() { }

  ngOnInit(): void {
  }

}
