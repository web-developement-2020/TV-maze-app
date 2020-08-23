import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDisplayPageData } from './idisplay-page-data';
import { IDisplayPage} from './idisplay-page';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

// class dateFormat{
//   constructor(public datePipe : DatePipe){ }
//   myFunction(date : Date){
//     date =new Date();
//     let latest_date = this.datePipe.transform(date,'YYYY-DD-MM');
//   } }

export class DisplayService {

  constructor(private httpClient : HttpClient) { }

  getDisplayPage(latest_date: Date){
    return this.httpClient.get<IDisplayPageData>(`http://api.tvmaze.com/schedule?country=US&${latest_date}`).pipe(map(data => this.transformToIDisplayPage(data)))
  }

  transformToIDisplayPage(data:IDisplayPageData):IDisplayPage {
    return{
      image : data.image.medium,
      name : data.name,
      url : data.url
  }
 }
}
