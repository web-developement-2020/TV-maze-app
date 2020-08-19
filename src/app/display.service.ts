import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDisplayPageData } from './idisplay-page-data';
import { IDisplayPage} from './idisplay-page';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private httpClient : HttpClient) { }
  getDisplayPage(){
    return this.httpClient.get<IDisplayPageData>(`http://api.tvmaze.com/shows`).pipe(map(data => this.transformToIDisplayPageData(data)))
  }

  transformToIDisplayPageData(data:IDisplayPageData):IDisplayPage {
    return(
      name0: data.name,
     link0: data.url,
      

  )
 }
}
