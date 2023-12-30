import { BaseClass } from "../../baseClasses";
import { IMenuOption } from "./types";

export interface MenuOption extends IMenuOption { }
export class MenuOption extends BaseClass {
  constructor(menuOption: IMenuOption) {
    super();
    this.fromObject(menuOption);
  }
}
