import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { PeoplePopularResponse } from '../model/interfaces/people-popular.interface';
import { PersonResponse } from '../model/interfaces/people.interface';

const PEOPLE_BASE_URL = 'person';
const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  peopleBaseUrl = `${environment.api_base_url}/${PEOPLE_BASE_URL}`;

  constructor(private http: HttpClient) { }

  getPerson(id: number) {
    let url = `${this.peopleBaseUrl}/${id}?api_key=${environment.api_key}&language=${environment.lang}`;
    return this.http.get<PersonResponse>(url, DEFAULT_HEADERS);
  }

  getPopularPeople(): Observable<PeoplePopularResponse> {
    let url = `${this.peopleBaseUrl}/popular/?api_key=${environment.api_key}&language=${environment.lang}`;
    return this.http.get<PeoplePopularResponse>(url, DEFAULT_HEADERS);
  }
}
