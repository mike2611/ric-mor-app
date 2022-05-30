import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private baseUrl = environment.API_URL;
  character$ = this.getCharacters();


  constructor(private httpClient: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/character`).
      pipe(
        map((result: any) => (result.results))
      );
  }
}
