import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import {ShowService} from './show.service';
import { DisplayPageComponent } from './display-page/display-page.component';

import { DisplayService } from './display.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FakeSearchResultsComponent } from './fake-search-results/fake-search-results.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatGridList, MatGridListModule} from '@angular/material/grid-list'

@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent,
    DisplayPageComponent,
    FakeSearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatGridListModule
  ],

  providers: [DisplayService,ShowService],

  

  bootstrap: [AppComponent]
})
export class AppModule { }
