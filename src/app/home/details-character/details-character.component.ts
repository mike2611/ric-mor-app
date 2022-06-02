import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, mergeMap, Observable } from 'rxjs';
import { Character } from 'src/app/character';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-details-character',
  templateUrl: './details-character.component.html',
  styleUrls: ['./details-character.component.css']
})
export class DetailsCharacterComponent implements OnInit {

  id$: Observable<number> = this.route.paramMap.pipe(
    map((paramMap) => Number(paramMap.get('id')))
  );

  character$: Observable<Character> = this.id$.pipe(
    mergeMap((id) => this.homeService.getCharacter(id))
  );

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
  }

}
