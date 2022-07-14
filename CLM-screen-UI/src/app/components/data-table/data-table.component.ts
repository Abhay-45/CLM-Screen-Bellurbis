import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {Criteria} from '../../services/invester-criteria';
import {CRITERIA} from '../../services/mock-criteria';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  ELEMENT_DATA: Criteria[] = CRITERIA
  displayedColumns: string[] = ['criteria', 'invester_1', 'invester_2', 'invester_3', 'invester_4']
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  constructor() {

   }
  ngOnInit(): void {
  }
  

  

}
