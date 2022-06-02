import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable, take } from 'rxjs';
import { ResultCharacters } from '../result-characters';
import { RequestInfo } from '../request-info';
import { Character } from '../character';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private baseUrl = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getCharacters(page: number, name?: string): Observable<RequestInfo> {
    return this.httpClient.get<ResultCharacters>(
      name ? `${this.baseUrl}/character/?name=${name}&page=${page}` : `${this.baseUrl}/character/?page=${page}`
    ).
      pipe(
        take(1),
        map((data) => ({ characters: data.results, nextAvailable: data.info.next !== null ? true : false })),
      );
  }

  getCharacter(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.baseUrl}/character/${id}`);
  }
}
