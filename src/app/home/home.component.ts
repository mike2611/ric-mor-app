import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';
import { SearchService } from '../header/search.service';
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
  searchText$ = this.searchService.searchText$;

  constructor(
    private homeService: HomeService,
    private searchService: SearchService,
  ) { }

  moreResults(): void {
    this.searchText$.subscribe(
      (text) => console.log('Desde la subscripcion: ' + text),
    );
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


// @ViewChild('inputSearch', { static: false })
// searchInput!: ElementRef;
// searchInput$!: Observable<any>;

// constructor() { }

// ngAfterViewInit(): void {
//   this.searchInput$ = fromEvent(this.searchInput.nativeElement, 'keyup').
//     pipe(
//       auditTime(400),
//       //We can also use throttleTime(400, asyncScheduler, { leading: true, trailing: true }),
//     )
//   this.searchInput$.subscribe(() => {
//     console.log(this.searchInput.nativeElement.value);
//   });
// }
