import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurrentSearchData } from './icurrent-search-data';
import { environment } from 'src/environments/environment';
import { ICurrentSearch } from './icurrent-search';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private httpClient: HttpClient) {}
  getCurrentSearch(search: string | number) {
    let uriParams = '';
    if (typeof search === 'string') {
      uriParams = `q=${search}`;
    } else {
      uriParams = `q=${search}`;
    }

    return this.httpClient
      .get<ICurrentSearchData>(`http://api.tvmaze.com/search/shows?${uriParams}`)
      .pipe(map((data) => this.transformToICurrentSearch(data)));
  }
  transformToICurrentSearch(data: ICurrentSearchData): ICurrentSearch {
    return {
      score: data[0].score,
      id: data[0].show.id,
      name: data[0].show.name,
      language: data[0].show.language,
      rating: data[0].show.rating.average,
      image: data[0].show.image.medium,
      summary: data[0].show.summary,
    };
  }
}
