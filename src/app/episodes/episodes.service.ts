import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, take } from 'rxjs';
import { Episode } from './episode';
import { ResultEpisode } from './result-episode';
import { environment } from '../../environments/environment';
import { EpisodesInfo } from './episodes-info';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  baserUrl = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  getEpisodes(page: number): Observable<EpisodesInfo> {
    return this.httpClient.get<ResultEpisode>(`${this.baserUrl}/episode/?page=${page}`).
      pipe(
        take(1),
        map((data: ResultEpisode) => ({ episodes: data.results, nextAvailable: data.info.next !== null ? true : false })),
      );
  }
}
