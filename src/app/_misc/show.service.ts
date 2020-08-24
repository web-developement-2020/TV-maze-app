import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IShowDetailsData } from './ishow-details-data';
import { IShowDetails } from './ishow-details';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient: HttpClient) {}

  @Input() showId: string;

  
  getShow(showId: string){
    return this.httpClient.get<IShowDetailsData>(`http://api.tvmaze.com/shows/${showId}?embed=cast`).pipe(
      map(data => this.transformToIShowDetails(data))
    )
    }
  

  transformToIShowDetails(data:IShowDetailsData):IShowDetails{
    return {
      showTitle: data.name,
      showImage: data.image.medium,
      showLink: data.officialSite,
      rating: data.rating.average,
      country: data.network.country,
      channel: data.network.name,
      genre: data.genres.toString(),
      language: data.language,
      previousEpisode: data._links.previousepisode.href,
      premierDate: new Date (data.premiered),
      summary: data.summary,
      time: new Date (data.schedule.time),
      days: data.schedule.days.toString(),
      castName1: data._embedded.cast[0].person.name,
      castLink1: data._embedded.cast[0].person.url,
      castImage1: data._embedded.cast[0].person.image.medium,
      castName2: data._embedded.cast[1].person.name,
      castLink2: data._embedded.cast[1].person.url,
      castImage2: data._embedded.cast[1].person.image.medium,
      castName3: data._embedded.cast[2].person.name,
      castLink3: data._embedded.cast[2].person.url,
      castImage3: data._embedded.cast[2].person.image.medium,
      castName4: data._embedded.cast[3].person.name,
      castLink4: data._embedded.cast[3].person.url,
      castImage4: data._embedded.cast[3].person.image.medium
  }

  }
}
