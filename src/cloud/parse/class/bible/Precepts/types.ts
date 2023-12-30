import Parse from 'parse/react-native';

export interface PreceptsVerse {
  bookName: string;
  chapter: number;
  beginVerse: number;
  endVerse: number;
  refs: string[];
}
export interface IPrecepts extends Parse.Object  {
  text: string;
  verses: PreceptsVerse[];
  tags: string[];
}
