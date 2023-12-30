import { IRider } from "./types"
import { ParseBaseClass } from "../baseClasses";

export const RIDER_CLASSNAME = "Rider";
export interface Rider extends IRider {}
export class Rider extends ParseBaseClass {
  constructor() {
    super(RIDER_CLASSNAME);
  }
}
