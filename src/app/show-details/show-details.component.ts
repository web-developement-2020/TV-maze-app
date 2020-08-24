import { Component, OnInit, Input } from '@angular/core';
import { IShowDetail } from '../ishow-detail';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css'],
})
export class ShowDetailsComponent implements OnInit {
  @Input() showId: string;
  @Input() showDetail: IShowDetail;


  constructor() {}

  ngOnInit(): void {}
}
