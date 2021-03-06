import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MaterialImportsModule } from './modules/material-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MoviesPopularListComponent } from './components/movies-popular-list/movies-popular-list.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { PeoplePopularListComponent } from './components/people-popular-list/people-popular-list.component';
import { PeoplePopularItemComponent } from './components/people-popular-item/people-popular-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { MovieDetailDialogComponent } from './components/dialogs/movie-detail-dialog/movie-detail-dialog.component';
import { PeopleDetailDialogComponent } from './components/dialogs/people-detail-dialog/people-detail-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddToListDialogComponent } from './components/dialogs/add-to-list-dialog/add-to-list-dialog.component';
import { ListDetailsComponent } from './components/list-details/list-details.component';
import { LoginDialogComponent } from './components/dialogs/login-dialog/login-dialog.component';
import { SessionComponent } from './components/shared/session/session.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { GenreFilterPipe } from './components/pipes/genre-filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MoviesPopularListComponent,
    MovieItemComponent,
    ToolbarComponent,
    PeoplePopularListComponent,
    PeoplePopularItemComponent,
    SidenavComponent,
    MovieDetailDialogComponent,
    PeopleDetailDialogComponent,
    AddToListDialogComponent,
    ListDetailsComponent,
    LoginDialogComponent,
    SessionComponent,
    FavoriteListComponent,
    GenreFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialImportsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    NgCircleProgressModule.forRoot({
      "backgroundStrokeWidth": 0,
      "backgroundPadding": 2,
      "radius": 40,
      "space": 10,
      "unitsColor": "#FFFFFF",
      "outerStrokeWidth": 1,
      "outerStrokeColor": "#86DC3D",
      "innerStrokeColor": "#3f51b5",
      "innerStrokeWidth": 5,
      "titleColor": "#FFFFFF",
      "showSubtitle": false
    }),
    ReactiveFormsModule
  ],
  entryComponents: [
    MovieDetailDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
