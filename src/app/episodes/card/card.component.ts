import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Episode } from '../episode';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

  @Input() episode!: Episode;

  constructor() { }

  ngOnInit(): void {
  }

}
