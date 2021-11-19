import { addTolistDTO } from './../model/dto/addToList.dto';
import { listDTO } from './../model/dto/list.dto';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponse } from '../model/interfaces/list.interface';
import { ListDetailResponse } from '../model/interfaces/list-detail.interface';
import { environment } from 'src/environments/environment.prod';

const LIST_BASE_URL = 'account/{account_id}/lists';
const SESSION_ID = 'a4deb067a8e5ddd2cfd216e28112f56910ea3f58';
const DEFAULT_HEADERS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getLists(): Observable<ListResponse> {
    let requestUrl = `${environment.api_base_url}/${LIST_BASE_URL}?api_key=${environment.api_key}&language=${environment.lang}&page=1&session_id=${SESSION_ID}`;
    return this.http.get<ListResponse>(requestUrl, DEFAULT_HEADERS)
  }

  createList(list: listDTO): Observable<listDTO> {
    let requestUrl = `${environment.api_base_url}/list?api_key=${environment.api_key}&session_id=${SESSION_ID}`;
    return this.http.post<listDTO>(requestUrl, list, DEFAULT_HEADERS);
  }

  addMovieToList(listId: number, addTolist: addTolistDTO) {
    let requestUrl = `${environment.api_base_url}/list/${listId}/add_item?api_key=${environment.api_key}&session_id=${SESSION_ID}`;
    return this.http.post(requestUrl, addTolist, DEFAULT_HEADERS);
  }

  getList(listId: string): Observable<ListDetailResponse> {
    let requestUrl = `${environment.api_base_url}/list/${listId}?api_key=${environment.api_key}&language=${environment.lang}`;
    return this.http.get<ListDetailResponse>(requestUrl, DEFAULT_HEADERS);
  }
}
