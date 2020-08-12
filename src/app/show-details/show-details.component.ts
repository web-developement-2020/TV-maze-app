import { Component, OnInit } from '@angular/core';

import {IShowDetails} from '../ishow-details'
import { getNumberOfCurrencyDigits } from '@angular/common';
import { using } from 'rxjs';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  show: IShowDetails
  constructor() { 
    this.show = {
      showTitle: 'A Really Cool Show',
      showImage: 'http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
      showLink: 'http://www.tvmaze.com/shows/1/under-the-dome',
      rating: 6.75,
      channel: 'NBC',
      country: 'US',
      genre: 'Romance',
      language: 'English',
      previousEpisode: 'http://www.tvmaze.com/episodes/185054/under-the-dome-3x13-the-enemy-within',
      premierDate: new Date(),
      summary: 'Soluta velit et ullam quasi. Iste sed id aliquid excepturi. Hic reiciendis eos id laudantium rerum numquam qui numquam. In corrupti nemo voluptas. Ex qui officiis qui voluptate explicabo.</p><p>Sit et animi architecto. Odio omnis incidunt delectus. Fugit voluptas voluptas sint et.</p><p>Odit facere ex aut debitis repellendus. Ad maxime sed dignissimos nostrum iusto dolorem. Libero consequuntur consequuntur maxime mollitia quos dolor laudantium illum. Et error amet possimus et. Enim error aut quae blanditiis eius voluptatum.</p>',
      schedule: new Date (),
      castName: 'Anthony Jones',
      castImage:'',
      castLink:'' 
      
    }
  }

  ngOnInit(): void {
  }

}
