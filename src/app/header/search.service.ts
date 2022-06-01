import { Injectable } from '@angular/core';
import { auditTime, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchText = new BehaviorSubject<string>('');
  searchText$ = this.searchText.asObservable().
    pipe(
      auditTime(400),
    );


  constructor() { }

  getSearchText(text: string): void {
    this.searchText.next(text);
  }
}
