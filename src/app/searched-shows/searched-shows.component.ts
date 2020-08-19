import { Component, OnInit, Input } from '@angular/core';
import { IShow } from '../ishow';
@Component({
  selector: 'app-searched-shows',
  templateUrl: './searched-shows.component.html',
  styleUrls: ['./searched-shows.component.css'],
})
export class SearchedShowsComponent implements OnInit {
  panelOpenState = false;

  @Input() shows: IShow[];
  constructor() {}

  ngOnInit(): void {

  }
}
