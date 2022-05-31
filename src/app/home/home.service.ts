import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { Character } from '../character';
import { ResultCharacters } from '../result-characters';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private baseUrl = environment.API_URL;
  character$ = this.getCharacters();


  constructor(private httpClient: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.httpClient.get<ResultCharacters>(`${this.baseUrl}/character`).
      pipe(
        map((data) => data.results)
      );
  }
}
