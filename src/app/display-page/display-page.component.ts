import { Component, OnInit } from '@angular/core';
import { IDisplayPage } from '../idisplay-page'

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css']
})
export class DisplayPageComponent implements OnInit {
current : IDisplayPage
  constructor() { 
    this.current = {
      image0:'',
      name0 : 'Fruits',
      image1 : '',
      name1:'vegetables', 
      image2: '',
      name2: 'apples',
      image3:'',
      name3:'bananas',
      image4:'',
      name4:'pineapples'
    }
  }

  ngOnInit(): void {
  }

}
