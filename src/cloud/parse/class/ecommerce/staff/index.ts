import { IStaff } from "./types";
import { ParseBaseClass } from "../baseClasses";

export const STAFF_CLASSNAME = "Staff";
export interface Staff extends IStaff {}
export class Staff extends ParseBaseClass {
  constructor() {
    super(STAFF_CLASSNAME);
  }
}
