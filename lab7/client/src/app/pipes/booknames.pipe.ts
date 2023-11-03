import { Pipe, PipeTransform } from '@angular/core';
import {Book} from '../authors/model/author';

@Pipe({
  name: 'booknames'
})
export class BooknamesPipe implements PipeTransform {

  transform(value: Book[] | undefined): string {
    if (value == null) return '';
    return value.map((book) => `${book.title}`).join(' <b>and</b> ');
  }

}
