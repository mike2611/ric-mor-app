import { Component, OnDestroy, OnInit } from '@angular/core';

import { HomeService } from './home.service';
import { SearchService } from '../header/search.service';
import { Character } from '../character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  characters: Character[] = [];
  page: number = 0;
  moreResultsAvailable = true;
  characterName = '';
  searchText$ = this.searchService.searchText$;
  searchTextSubscription: any;

  constructor(
    private homeService: HomeService,
    private searchService: SearchService,
  ) { }

  moreResults(): void {
    if (this.moreResultsAvailable) {
      this.page += 1;
      this.homeService.getCharacters(this.page, this.characterName).subscribe(
        (data) => {
          this.moreResultsAvailable = data.nextAvailable;
          this.characters = this.characters.concat(data.characters)
        },
      );
    }
  }

  ngOnInit(): void {
    this.searchTextSubscription = this.searchText$.subscribe(
      (characterName) => {
        this.characters = [];
        this.page = 0;

        if (this.characterName !== characterName) {
          this.moreResultsAvailable = true;
          this.characterName = characterName;
        }

        this.moreResults();
      }
    );
  }

  ngOnDestroy(): void {
    this.searchTextSubscription.unsubscribe();
  }
}
