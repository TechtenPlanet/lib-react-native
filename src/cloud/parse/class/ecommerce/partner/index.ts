import { IPartner } from "./types"
import { Shop, Staff } from "../..";
import { ParseBaseClass } from "../../baseClasses";

export const PARTNER_CLASSNAME = "Partner";
export interface Partner extends IPartner {}
export class Partner extends ParseBaseClass {
  constructor() {
    super(PARTNER_CLASSNAME);
  }

  addShop(shop: Shop) {
    this.add("shops", shop);
  }
  addStaff(staff: Staff) {
    this.add("staff", staff);
  }
}
