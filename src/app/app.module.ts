import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentSearchComponent } from './current-search/current-search.component';
import {SearchService} from './search.service';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WordSearchComponent } from './word-search/word-search.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import {ShowService} from './show.service';
import { DisplayPageComponent } from './display-page/display-page.component';
import { DisplayService } from './display.service';





@NgModule({
  declarations: [
    AppComponent,
    CurrentSearchComponent,
    WordSearchComponent,
    ShowDetailsComponent,
    DisplayPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,

  ],

  


  providers: [DisplayService,ShowService, SearchService],

  


  bootstrap: [AppComponent]
})
export class AppModule { }
