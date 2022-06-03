import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../episodes/episodes.service';
import { Episode } from './episode';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  episodes: Episode[] = [];
  page = 0;

  constructor(private episodesService: EpisodesService) { }

  moreResults(): void {
    this.page += 1;
    this.episodesService.getEpisodes(this.page).subscribe(
      (data) => {
        this.episodes = this.episodes.concat(data);
      }
    );
  }

  ngOnInit(): void {
    this.moreResults();
  }

}
