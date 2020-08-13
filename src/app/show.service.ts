import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IShowDetailsData } from './ishow-details-data'
import { IShowDetails } from './ishow-details';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient: HttpClient) {}

  getShow(showId: string){
    return this.httpClient.get<IShowDetailsData>(`http://api.tvmaze.com/shows/${showId}?embed=cast`)
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
      schedule:{
        days: data.schedule.days.toString(),
        time: new Date (data.schedule.time)
      },
      cast:{
        castName: data._embedded.cast[0].person.name,
        castLink: data._embedded.cast[0].person.url,
        castImage: data._embedded.cast[0].person.image.medium
  }
    }
  }
   
}
