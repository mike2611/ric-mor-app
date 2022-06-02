import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLetters'
})
export class FilterLettersPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/[^0-9]/g, '');
  }
}
