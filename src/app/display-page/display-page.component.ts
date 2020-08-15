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
      link0 : '',
      image1 : '',
      name1: 'vegetables',
      link1 : '', 
      image2: '',
      name2: 'apples',
      link2 : '',
      image3:'',
      name3:'bananas',
      link3 : '',
      image4:'',
      name4:'pineapples',
      link4 : ''
    }
  }

  ngOnInit(): void {
  }

}
