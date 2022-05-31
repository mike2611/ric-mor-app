import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, map, tap, Observable } from 'rxjs';
import { Character } from '../character';
import { ResultCharacters } from '../result-characters';

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  private baseUrl = environment.API_URL;
  private characters = new BehaviorSubject<Character[]>([]);
  private page = 1;
  character$ = this.characters.asObservable();


  constructor(private httpClient: HttpClient) {
    this.getCharacters(this.page).subscribe();
  }

  getCharacters(page: number): Observable<Character[]> {
    return this.httpClient.get<ResultCharacters>(`${this.baseUrl}/character/?page=${page}`).
      pipe(
        map((data) => data.results),
        tap((characters) => this.characters.next(characters))
      );
  }

  nextPage(): void {
    this.page += 1;
    this.getCharacters(this.page).subscribe();
  }

  previousPage(): void {
    this.page -= 1;
    this.getCharacters(this.page).subscribe();
  }


}
