import { IPrecepts } from './types';
import { ParseBaseClass } from '../../baseClasses';

export const PRECEPTS_CLASSNAME = 'Precepts';
export interface Precepts extends IPrecepts {}
export class Precepts extends ParseBaseClass {
  constructor(precepts?: Precepts) {
    super(PRECEPTS_CLASSNAME);
    if (precepts && typeof precepts === 'object') {
      this.fromObject(precepts);
    }
  }
}
