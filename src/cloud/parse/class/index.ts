import { SubClass } from '../initialize';
import { BibleSubClasses, Precepts, PRECEPTS_CLASSNAME } from './bible';

export * from './address';
// export * from "./chat";
export * from './user';
export * from './ecommerce';
export * from './bible';

export const SubClasses: SubClass[] = [
  ...BibleSubClasses
];
