import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IDisplayPageData } from './idisplay-page-data'
@Injectable({
  providedIn: 'root'
})
export class DisplayServiceService {

  constructor(private httpClient:HttpClient) { }
  getDisplay(){
    this.httpClient.get< IDisplayPageData >(`http://api.tvmaze.com/shows`)
  }
}
