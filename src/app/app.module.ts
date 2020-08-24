import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchService } from './_misc/search.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowService } from './_misc/show.service';
import { DisplayPageComponent } from './display-page/display-page.component';
import { DisplayService } from './_misc/display.service';
import { SearchedShowsComponent } from './searched-shows/searched-shows.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    SearchedShowsComponent,
    HeaderComponent,
    ShowDetailsComponent,
    DisplayPageComponent,
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
    MatTooltipModule,
  ],

  providers: [DisplayService, ShowService, SearchService, DatePipe],

  bootstrap: [AppComponent],
})
export class AppModule {}
