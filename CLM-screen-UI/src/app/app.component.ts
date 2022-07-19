import { Component, OnInit } from '@angular/core';
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import {faClipboard} from '@fortawesome/free-regular-svg-icons'
import {Employee} from './employee'
import {Element} from './elements'
import { Column } from './components/table/column';
import { Chart } from 'node_modules/chart.js';

  const tableColumns: Array<Column> = [
  { columnDef: 'position', header: 'Position', cell: (element: Record<string, any>) => `${element['position']}` },
  { columnDef: 'name', header: 'Name', cell: (element: Record<string, any>) => `${element['name']}`, isLink: true, url: 'abc'},
  { columnDef: 'weight', header: 'Weight', cell: (element: Record<string, any>) => `${element['weight']}` },
  { columnDef: 'symbol', header: 'Symbol', cell: (element: Record<string, any>) => `${element['symbol']}` },
  ];
  const tableData: Array<Element> = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
   
  }

  faYoutube = faYoutube;
  title = 'CLM-screen-UI';
  tableData = tableData;
  tableColumns = tableColumns;
}
