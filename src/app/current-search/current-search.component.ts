import { Component, OnInit, Input } from '@angular/core';
import { ICurrentSearch } from '../icurrent-search';

@Component({
  selector: 'app-current-search',
  templateUrl: './current-search.component.html',
  styleUrls: ['./current-search.component.css'],
})
export class CurrentSearchComponent implements OnInit {
  @Input() current: ICurrentSearch;
  constructor() {

  }

  ngOnInit(): void {

  }
}
