import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  value = '';
  constructor(private searchService: SearchService) { }

  onSearch() {
    this.searchService.getSearchText(this.value);
  }
}
