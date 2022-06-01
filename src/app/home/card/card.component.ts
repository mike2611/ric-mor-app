import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Input } from '@angular/core';
import { Character } from 'src/app/character';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input() character!: Character;

  constructor() { }

}
