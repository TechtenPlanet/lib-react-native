import Parse from 'parse/react-native';
import { Books } from '../Books';

export interface IVerse extends Parse.Object {
  bookName: string;
  book: Books;
  chapter: number;
  verse: number;
  text: string;

}
