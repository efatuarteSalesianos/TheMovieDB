import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Observable } from 'rxjs';
import { MoviesPopularResponse } from '../model/interfaces/movies-popular.interface';
import { identifierModuleUrl } from '@angular/compiler';
import { MovieResponse } from '../model/interfaces/movie.interface';

const MOVIE_BASE_URL = 'movie';
const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieBaseUrl = `${environment.api_base_url}/${MOVIE_BASE_URL}`;

  constructor(private http: HttpClient) { }

  getMovie(id: number) {
    let url = `${this.movieBaseUrl}/${id}?api_key=${environment.api_key}&language=${environment.lang}`;
    return this.http.get<MovieResponse>(url, DEFAULT_HEADERS);
  }

  getPopularMovies(): Observable<MoviesPopularResponse> {
    let url = `${this.movieBaseUrl}/popular/?api_key=${environment.api_key}&language=${environment.lang}`;
    return this.http.get<MoviesPopularResponse>(url, DEFAULT_HEADERS);
  }

  getMoviesByGenre(id: number): Observable<MoviesPopularResponse> {
    let url = `${environment.api_base_url}/discover/movie/?api_key=${environment.api_key}&language=${environment.lang}&with_genres=${id}`;
    return this.http.get<MoviesPopularResponse>(url, DEFAULT_HEADERS);
  }
}
