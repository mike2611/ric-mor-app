import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Input } from '@angular/core';
import { Character } from 'src/app/character';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  @Input() character!: Character;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  navigateToCharacterDetails(id: number) {
    this.router.navigate(['details-character', id], {
      relativeTo: this.route,
    })
  }

}
