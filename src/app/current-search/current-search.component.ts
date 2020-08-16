import { Component, OnInit } from '@angular/core';
import { ICurrentSearch } from '../icurrent-search';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-current-search',
  templateUrl: './current-search.component.html',
  styleUrls: ['./current-search.component.css'],
})
export class CurrentSearchComponent implements OnInit {
  current: ICurrentSearch;
  constructor(private searchService: SearchService) {

  }

  ngOnInit(): void {
    this.searchService.getCurrentSearch('girls').subscribe(data => this.current = data)
  }
}
