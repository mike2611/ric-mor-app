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
  moreResultsAvailable = true;
  page = 0;

  constructor(private episodesService: EpisodesService) { }

  moreResults(): void {
    if (this.moreResultsAvailable) {
      this.page += 1;
      this.episodesService.getEpisodes(this.page).subscribe(
        (data) => {
          this.moreResultsAvailable = data.nextAvailable;
          this.episodes = this.episodes.concat(data.episodes);
        }
      );
    }
  }

  ngOnInit(): void {
    this.moreResults();
  }

}
