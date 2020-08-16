import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import {ShowService} from './show.service'
import {HttpClientModule} from '@angular/common/http';
import { DisplayPageComponent } from './display-page/display-page.component';

import { DisplayServiceService } from './display-service.service'
@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent,
    DisplayPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShowService,DisplayServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
