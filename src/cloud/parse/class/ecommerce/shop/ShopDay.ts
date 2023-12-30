import { BaseClass } from "../baseClasses";
import { IShopDay } from "./types";
import { formatStandardTime } from "lib_helpers/validation";

export interface ShopDay extends IShopDay {}
export class ShopDay extends BaseClass {
  constructor(shopDay?: IShopDay) {
    super();
    this.fromObject(shopDay);
  }
  static isOpened = (shopDay: ShopDay) => {
    if (!shopDay.opened || !shopDay.openTime || !shopDay.closeTime) {
      return false;
    }
    const date = new Date();
    return date >= shopDay.openTime && date < shopDay.closeTime;
  };
  static openTimeStr = (shopDay: ShopDay) => {
    if (!shopDay?.openTime) {
      return "00:00";
    }
    return formatStandardTime(shopDay.openTime);
  };
  static closeTimeStr = (shopDay: ShopDay) => {
    if (!shopDay?.closeTime) {
      return "00:00";
    }
    return formatStandardTime(shopDay.closeTime);
  };
}
