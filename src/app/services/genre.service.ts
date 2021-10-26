import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { GenreResponse } from '../model/interfaces/genres.interface';

const GENRE_BASE_URL = 'genre/movie/list';
const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class GenreService {

  genreBaseUrl = `${environment.api_base_url}/${GENRE_BASE_URL}`;

  constructor(private http: HttpClient) { }

  getGenres(): Observable<GenreResponse> {
    let url = `${this.genreBaseUrl}/?api_key=${environment.api_key}&language=${environment.lang}`;
    return this.http.get<GenreResponse>(url, DEFAULT_HEADERS);
  }
}
