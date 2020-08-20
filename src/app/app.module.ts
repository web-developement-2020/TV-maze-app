import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentSearchComponent } from './current-search/current-search.component';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WordSearchComponent } from './word-search/word-search.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowService } from './show.service';
import { DisplayPageComponent } from './display-page/display-page.component';

import { DisplayService } from './display.service';

import { SearchedShowsComponent } from './searched-shows/searched-shows.component';
import { MatExpansionModule } from '@angular/material/expansion';

import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';


import { FakeSearchResultsComponent } from './fake-search-results/fake-search-results.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';

import { DatePipe} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CurrentSearchComponent,
    WordSearchComponent,

    SearchedShowsComponent,
    HeaderComponent,

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
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,

    MatExpansionModule,
    MatButtonModule,

  providers: [
    DisplayService,
    ShowService,
    SearchService,
    DatePipe],
 bootstrap: [AppComponent],
})
export class AppModule {}
