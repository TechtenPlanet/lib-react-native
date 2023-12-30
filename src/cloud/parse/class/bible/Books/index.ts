import { IBooks } from './types';
import { ParseBaseClass } from '../../baseClasses';

export const BOOKS_CLASSNAME = 'Books';
export interface Books extends IBooks {}
export class Books extends ParseBaseClass {
  constructor(book?: Books) {
    super(BOOKS_CLASSNAME);
    if (book && typeof book === 'object') {
      this.fromObject(book);
    }
  }
}
