import { Component, OnInit, Input } from '@angular/core';
import { IShow } from '../ishow';
import {BehaviorSubject} from 'rxjs';
@Component({
  selector: 'app-searched-shows',
  templateUrl: './searched-shows.component.html',
  styleUrls: ['./searched-shows.component.css'],
})
export class SearchedShowsComponent implements OnInit {
  darkModeState: BehaviorSubject<boolean>;


  @Input() shows: IShow[];
  constructor() {}

  ngOnInit(): void {

  }
}
