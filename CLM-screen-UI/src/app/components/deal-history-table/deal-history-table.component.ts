import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule, } from '@angular/material/table';
import {TRANSACTIONS} from '../../services/mock-transactions';

const DATA: any = TRANSACTIONS;

@Component({
  selector: 'app-deal-history-table',
  templateUrl: './deal-history-table.component.html',
  styleUrls: ['./deal-history-table.component.css']
})
export class DealHistoryTableComponent implements OnInit {

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
