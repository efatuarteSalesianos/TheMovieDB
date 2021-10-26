import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';

import { MaterialImportsModule } from './modules/material-imports.module';

import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MoviesPopularListComponent } from './movies-popular-list/movies-popular-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { PeoplePopularListComponent } from './people-popular-list/people-popular-list.component';
import { PeoplePopularItemComponent } from './people-popular-item/people-popular-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MoviesPopularListComponent,
    MovieItemComponent,
    ToolbarComponent,
    PeoplePopularListComponent,
    PeoplePopularItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
      "backgroundStrokeWidth": 0,
      "backgroundPadding": 2,
      "radius": 40,
      "space": 10,
      "unitsColor": "#000000",
      "outerStrokeWidth": 1,
      "outerStrokeColor": "#3f51b5",
      "innerStrokeColor": "#3f51b5",
      "innerStrokeWidth": 5,
      "titleColor": "#000000",
      "showSubtitle": false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
