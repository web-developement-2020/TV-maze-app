import { Component, OnInit, Input } from '@angular/core';
import { IShow } from '../ishow';
import { IShowDetail } from '../ishow-detail';
import { ShowDetailsComponent } from '../show-details/show-details.component';

@Component({
  selector: 'app-searched-shows',
  templateUrl: './searched-shows.component.html',
  styleUrls: ['./searched-shows.component.css'],
})
export class SearchedShowsComponent implements OnInit {


  @Input() shows: IShow[];
  // @Input() showDetail: IShowDetail;
  panelOpenState: boolean=false;
  constructor() {}

  ngOnInit(): void {}
}
