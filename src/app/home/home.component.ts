import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { HomeService } from './home.service';
import { Character } from '../character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  page: number = 0;
  moreResultsAvailable = true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private homeService: HomeService,
  ) { }

  moreResults(): void {
    if (this.moreResultsAvailable) {
      this.page += 1;
      this.homeService.getCharacters(this.page).subscribe(
        (data) => {
          this.moreResultsAvailable = data.nextAvailable;
          this.characters = this.characters.concat(data.characters)
        },
      );
    }
  }

  ngOnInit(): void {
    this.moreResults();
  }
}
