import { ListDetailsComponent } from './../components/list-details/list-details.component';
import { MoviesPopularListComponent } from '../components/movies-popular-list/movies-popular-list.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { PeoplePopularListComponent } from '../components/people-popular-list/people-popular-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from '../components/session/session.component';

const routes: Routes = [
  { path: 'movies-popular', component: MoviesPopularListComponent },
  { path: 'people-popular', component: PeoplePopularListComponent },
  { path: 'list/:id', component: ListDetailsComponent},
  {path: 'loginsuccess', component: SessionComponent},
  { path: '',   redirectTo: '/movies-popular', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
