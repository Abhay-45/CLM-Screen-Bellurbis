import { Component, OnInit } from '@angular/core';
import { Input, } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-button-common',
  templateUrl: './button-common.component.html',
  styleUrls: ['./button-common.component.css'],
})
export class ButtonCommonComponent implements OnInit {

  
  @Input() buttonText: string;
  @Input() buttonIcon: IconDefinition ;
 
  

  constructor() { 
    
  }
  

  ngOnInit(): void {
   
  }

  
  

}
