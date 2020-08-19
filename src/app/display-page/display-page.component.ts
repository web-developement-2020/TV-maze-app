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
      image0:"http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
      name0 : "Under the Dome",
      link0 : "http://www.tvmaze.com/shows/1/under-the-dome",
      image1 : "http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
      name1:  "Person of Interest",
      link1 :  "http://www.tvmaze.com/shows/2/person-of-interest",
      image2:  "http://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
      name2:  "Bitten",
      link2 :  "http://www.tvmaze.com/shows/3/bitten",
      image3:"http://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg",
      name3: "Arrow",
      link3 :  "http://www.tvmaze.com/shows/4/arrow",
      image4: "http://static.tvmaze.com/uploads/images/medium_portrait/178/445621.jpg",
      name4: "True Detective",
      link4 :  "http://www.tvmaze.com/shows/5/true-detective"
    }
  }

  ngOnInit(): void {
  }

}
