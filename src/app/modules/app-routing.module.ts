import { MoviesPopularListComponent } from '../components/movies-popular-list/movies-popular-list.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { PeoplePopularListComponent } from '../components/people-popular-list/people-popular-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'movies-popular', component: MoviesPopularListComponent },
  { path: 'people-popular', component: PeoplePopularListComponent },
  { path: '',   redirectTo: '/movies-popular', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
