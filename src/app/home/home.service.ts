import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable, take } from 'rxjs';
import { ResultCharacters } from '../result-characters';
import { RequestInfo } from '../request-info';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private baseUrl = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getCharacters(page: number): Observable<RequestInfo> {
    return this.httpClient.get<ResultCharacters>(`${this.baseUrl}/character/?page=${page}`).
      pipe(
        take(1),
        map((data) => ({ characters: data.results, nextAvailable: data.info.next !== null ? true : false })),
      );
  }
}
