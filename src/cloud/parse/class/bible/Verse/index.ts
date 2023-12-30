import { IVerse } from './types';
import { ParseBaseClass } from '../../baseClasses';

export const VERSE_CLASSNAME = 'KJV1769';
export interface Verse extends IVerse {}
export class Verse extends ParseBaseClass {
  constructor(verse?: Verse) {
    super(VERSE_CLASSNAME);
    if (verse && typeof verse === 'object') {
      this.fromObject(verse);
    }
  }
    
  getTitle() {
    return `${this.bookName} ${this.chapter}:${this.verse}`
  }
}
