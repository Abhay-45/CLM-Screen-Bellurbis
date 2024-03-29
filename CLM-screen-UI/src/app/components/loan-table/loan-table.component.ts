import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule, } from '@angular/material/table';
import {Criteria} from '../../services/invester-criteria';
import {LOAN} from '../../services/mock-loans';

const DATA: any = LOAN;

@Component({
  selector: 'app-loan-table',
  templateUrl: './loan-table.component.html',
  styleUrls: ['./loan-table.component.css']
})
export class LoanTableComponent implements OnInit {

// ELEMENT_DATA: Criteria[] = CRITERIA
  // displayedColumns: string[] = ['criteria', 'invester_1', 'invester_2', 'invester_3', 'invester_4']
  // dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  columns:Array<any>
  displayedColumns:Array<any>
  dataSource:any

  constructor() {

   }
  ngOnInit() {
    // Get list of columns by gathering unique keys of objects found in DATA.
    const columns = DATA
      .reduce((columns: any, row: {}) => {
        return [...columns, ...Object.keys(row)]
      }, [])
      .reduce((columns: string | any[], column: any) => {
        return columns.includes(column)
          ? columns
          : [...columns, column]
      }, [])
    // Describe the columns for <mat-table>.
    this.columns = columns.map((column: string | number) => {
      return { 
        columnDef: column,
        header: column,
        cell: (element: any) => `${element[column] ? element[column] : ``}`     
      }
    })
    this.displayedColumns = this.columns.map(c => c.columnDef);
    // Set the dataSource for <mat-table>.
    this.dataSource = DATA
  }
  

}
