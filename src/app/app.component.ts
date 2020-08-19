import { Component } from '@angular/core';
import { ICurrentSearch } from './icurrent-search';
import { SearchService } from './search.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 currentSearch: ICurrentSearch

 constructor(private searchService: SearchService){}

 doSearch(searchValue){
  const userInput = searchValue.split(',').map(s => s.trim())
this.searchService
.getCurrentSearch(userInput[0])
.subscribe(data => this.currentSearch = data);
}
}
