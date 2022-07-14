import { Component, OnInit } from '@angular/core';
import { Input, } from '@angular/core';


@Component({
  selector: 'app-button-common',
  templateUrl: './button-common.component.html',
  styleUrls: ['./button-common.component.css'],
})
export class ButtonCommonComponent implements OnInit {

  
  @Input() buttonText: string;
  @Input() buttonIcon: string;
  

  constructor() { 
    
  }
  

  ngOnInit(): void {
   
  }

  
  

}
