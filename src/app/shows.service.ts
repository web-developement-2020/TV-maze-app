import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IShowData } from './ishowdata';
import { IShow } from './ishow';
import { IShowSearchData } from './ishow-search-data';
import { IShowDetailData } from './ishow-detail-data';
import { IShowDetail } from './ishow-detail';
import { map } from 'rxjs/operators';
import{ICast} from './icast';
import{ICastData} from './icast-data';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  private showUrl = 'https://api.tvmaze.com/shows';
  // private shows:IShowData;

  constructor(private httpClient: HttpClient) {}

  //search shows by search string
  getShows(searchTerm: string) {
    return this.httpClient
      .get<IShowSearchData[]>(
        `http://api.tvmaze.com/search/shows?q=${searchTerm}`
      )
      .pipe(
        map((data) => {
          return data.map((show) => {
            return this.transformToSeachShows(show);
          });
        })
      );
  }

  getShowById(id: number) {
    return this.httpClient
      .get<IShowDetailData>(`http://api.tvmaze.com/shows/${id}?embed=cast`)
      .pipe(map((data) => this.transformToShowDetail(data)));
  }

  //get todays' shows in the US
  //https://api.tvmaze.com/schedule?country=US&date=2020-08-19
  getShowByDate() {
    let date;
    date = new Date().toISOString().substring(0, 10);
    return this.httpClient
      .get<IShowSearchData[]>(
        `https://api.tvmaze.com/schedule?country=US&date=${date}`
      )
      .pipe(
        map((data) => data.map((show) => this.transformToShowsByDate(show)))
      );
  }

  toShortName(name: string) {
    let shortName;
    if (name) {
      return (shortName = name.length > 20 ? name.slice(0, 20) + '...' : name);
    }
  }

  toShortSummary(summary: string) {
    let shortSummary;
    let sum;
    // console.log(shows.show.summary);
    sum = summary.split('</p>')[0].split(' ');
    return (shortSummary =
      sum.length < 19 ? sum.join(' ') : sum.slice(0, 19).join(' ') + '...</p>');
  }
  getImage(image: any) {
    let isImage;

    return (isImage = image
      ? image.medium
      : 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png');
  }

  getCast(cast:[]):[] {
    let item;
    item= cast.map(data => this.transfromToCast(data));
    return item;
  }
  
  isCountry(item){
    let country;
    return country = item? item.name : 'unknown'; 
    }
  

  transfromToCast(data:ICastData):ICast{
  return{

        id: data.person.id,
        url:data.person.url,
        name:data.person.name,
        country:this.isCountry(data.person.country),
        birthday:data.person.birthday,
        gender:data.person.gender,
        image:this.getImage(data.person.image),
         _links:data.person._links.self.href 
      }
  }


  transformToShowsByDate(showsByDate: IShowSearchData): IShow {
        return {
      id: showsByDate.show.id,
      name: showsByDate.show.name,
      shortName: this.toShortName(showsByDate.show.name),
      language: showsByDate.show.language,
      genres: showsByDate.show.genres,
      runtime: showsByDate.show.runtime,
      premiered: showsByDate.show.premiered,
      rating: showsByDate.show.rating.average,
      image: this.getImage(showsByDate.show.image),
      summary: showsByDate.show.summary,
      shortSummary: this.toShortSummary(showsByDate.show.summary),
    };
  }

  transformToIShow(item: IShowData): IShow {
    return {
      id: item.id,
      name: item.name,
      shortName: this.toShortName(item.name),
      language: item.language,
      genres: item.genres,
      runtime: item.runtime,
      premiered: item.premiered,
      rating: item.rating.average,
      image: item.image.medium,
      summary: item.summary,
      shortSummary: item.summary,
    };
  }

  transformToSeachShows(shows: IShowSearchData): IShow {
    return {
      id: shows.show.id,
      name: shows.show.name,
      shortName: this.toShortName(shows.show.name),
      language: shows.show.language,
      genres: shows.show.genres,
      runtime: shows.show.runtime,
      premiered: shows.show.premiered,
      rating: shows.show.rating.average,
      image: this.getImage(shows.show.image),
      summary: shows.show.summary,
      shortSummary: this.toShortName(shows.show.summary),
    };
  }

  // URL: /shows/:id/images
  // https://api.tvmaze.com/shows/1/images
  // `http://api.tvmaze.com/shows/${item.id}/images`;

  transformToShowDetail(detail: IShowDetailData): IShowDetail {
    return {
      id: detail.id,
      name: detail.name,
      shortName: this.toShortName(detail.name),
      url: detail.url,
      language: detail.language,
      genres: detail.genres,
      runtime: detail.runtime,
      premiered: detail.premiered,
      officialSite: detail.officialSite,
      schedule_time: detail.schedule.time,
      schedule_days: detail.schedule.days,
      rating: detail.rating,
      network_name:detail.network.name,
      image: this.getImage(detail.image),
      summary: detail.summary,
      shortSummary: this.toShortSummary(detail.summary),
      _embedded: {
        cast: this.getCast(detail._embedded.cast),
      },
    };
  }
}
