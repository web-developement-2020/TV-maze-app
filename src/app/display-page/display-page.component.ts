import { Component, OnInit, Input } from '@angular/core';
import { IDisplayPage } from '../idisplay-page'
import { DisplayService } from '../display.service';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {
  
@Input() date:Date;
 current : IDisplayPage
  constructor(private dispalyService:DisplayService) { 
    
  }
  

  ngOnInit(): void {
    this.dispalyService.getDisplayPage(new Date).subscribe(data =>this.current = data)
  }

}
