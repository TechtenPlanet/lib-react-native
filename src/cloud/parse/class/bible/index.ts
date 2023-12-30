import { SubClass } from '../../initialize';
import { BOOKS_CLASSNAME, Books } from './Books';
import { PRECEPTS_CLASSNAME, Precepts } from './Precepts';
import { VERSE_CLASSNAME, Verse } from './Verse';

export * from './Precepts'
export * from './Books'
export * from './Verse'
export const BibleSubClasses: SubClass[] = [
    {
      className: PRECEPTS_CLASSNAME,
      class: Precepts as any,
    },
    {
      className: BOOKS_CLASSNAME,
      class: Books as any,
    },
    {
      className: VERSE_CLASSNAME,
      class: Verse as any,
    },
  ];