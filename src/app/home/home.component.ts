import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Character } from '../character';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  character$: Observable<Character[]> = this.homeService.character$;

  constructor(private homeService: HomeService) { }

}
