import { Component, OnInit, Input } from '@angular/core';
import {IShowDetails} from '../ishow-details'
import{IShowDetail}from '../ishow-detail';
// import {ShowService} from '../show.service'
import {Pipe, PipeTransform} from '@angular/core';


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css'],
})
export class ShowDetailsComponent implements OnInit {
  @Input() showId: string;
  @Input() showDetail: IShowDetail;

  show: IShowDetails;

  

  constructor() {}

  ngOnInit(): void {
    // this.showService.getShow('123').subscribe((data) => (this.show = data));
  }
}
