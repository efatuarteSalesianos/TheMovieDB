import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLogged(): boolean {
    return localStorage.getItem('session_id') != null;
  }

  getSessionId() {
    return localStorage.getItem('session_id');
  }

  setSessionId(sessionId: string) {
    localStorage.setItem('session_id', sessionId);
  }
}
