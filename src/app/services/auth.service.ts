import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { RequestTokenResponse, SessionResponse } from '../model/interfaces/auth.interface';

const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLogged(): boolean {
    return localStorage.getItem('session_id') != null;
  }

  getLocalSessionId() {
    return localStorage.getItem('session_id');
  }

  setLocalSessionId(sessionId: string) {
    localStorage.setItem('session_id', sessionId);
  }

  setLocalRequestToken(token: string) {
    localStorage.setItem('request_token', token);
  }

  getLocalRequestToken() {
    return localStorage.getItem('request_token');
  }

  getRequestToken(): Observable<RequestTokenResponse> {
    return this.http.get<RequestTokenResponse>(`${environment.api_base_url}/authentication/token/new?api_key=${environment.api_key}`);
  }

  getSessionId(): Observable<SessionResponse> {
    return this.http.post<SessionResponse>(`https://api.themoviedb.org/3/authentication/session/new?api_key=${environment.api_key}`, { request_token: this.getLocalRequestToken()});
  }
}
