import { Component } from '@angular/core';
import { ICurrentSearch } from './icurrent-search';
import { SearchService } from './search.service';
import {ShowsService} from './shows.service';
import { IShow } from './ishow';
import{IShowDetail} from './ishow-detail';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentSearch: ICurrentSearch;
  shows: IShow[];
  showsByDate: IShow[];
  showDetail: IShowDetail;

  constructor(
    private searchService: SearchService,
    private showsService: ShowsService
  ) {}

  doSearch(searchValue) {
    const userInput = searchValue.split(',').map((s) => s.trim());
    this.searchService
      .getCurrentSearch(userInput[0])
      .subscribe((data) => (this.currentSearch = data));
  }

  goSearch(search) {
    this.showsService.getShows(search).subscribe((data) => {
      this.shows = data;
    });
  }
  
  getShowDetail(id: number) {
    return this.showsService.getShowById(id).subscribe((data) => {
      this.showDetail = data;
    });
  }

  ngOnInit(): void {
    this.showsService.getShowByDate().subscribe((data) => {
      this.showsByDate = data.slice(7,12);
    });
  }
}
