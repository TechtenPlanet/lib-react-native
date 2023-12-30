import { IMenuItem, IMenuOption } from "./types";
import { ParseBaseClass } from "../../baseClasses";

export const MENUITEM_CLASSNAME = "MenuItem";

export interface MenuItem extends IMenuItem {}
export class MenuItem extends ParseBaseClass {
  constructor(menuItem: MenuItem) {
    super(MENUITEM_CLASSNAME);
    this.fromObject(menuItem);
  }
  addOption = (option: IMenuOption) => {
    if (!this.options) {
      this.options = [];
    }
    this.add("options", option);
  };
  removeOption = (option: IMenuOption) => {
    this.remove("options", option);
  };
}

export * from './menuOption'