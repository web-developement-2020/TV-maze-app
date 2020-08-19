import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IShow } from './ishow';
import { IShowSearchData } from './ishow-search-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {

  constructor(private httpClient: HttpClient) {}

  getShows(searchTerm: string) {
    return this.httpClient
      .get<IShowSearchData[]>(
        `http://api.tvmaze.com/search/shows?q=${searchTerm}`
      )
      .pipe(
        map((data) => {
          console.log('data:: ', data);
          return data.map((show) => {
            return this.transformToSeachShows(show);
          });
        })
      );
  }

  transformToSeachShows(shows: IShowSearchData): IShow {

    let shortSummary;
    // console.log(shows.show.summary);
    if (shows.show.summary) {
      let summary = shows.show.summary.split('</p>')[0].split(' ');

      shortSummary =
        summary.length < 19
          ? summary.join(' ')
          : summary.slice(0, 19).join(' ') + '...</p>';
    }

    let image;
    // console.log('shows.show.image: ', shows.show.image);
    image = shows.show.image
      ? shows.show.image.medium
      : 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png';

    let name;
    name =
      shows.show.name.length > 20
        ? shows.show.name.slice(0, 20) + '...'
        : shows.show.name;

    // console.log('image: ', image);
    return {
      id: shows.show.id,
      name: name,
      language: shows.show.language,
      genres: shows.show.genres,
      runtime: shows.show.runtime,
      premiered: shows.show.premiered,
      rating: shows.show.rating.average,
      image: image,
      summary: shortSummary,
    };
  }
}

