import { IShop } from "./types";
import { phoneNumberValidator } from "lib_helpers/validation";
import { getDay } from "lib_helpers/date";
import { ParseBaseClass } from "../baseClasses";
import { Staff } from "..";
import { ICoordinates } from "../address/types";
import { ShopDay } from "./ShopDay";

export const SHOP_CLASSNAME = "Shop";
export interface Shop extends IShop {}
export class Shop extends ParseBaseClass {
  constructor() {
    super(SHOP_CLASSNAME);
  }
  addTag(tag: string) {
    if (!this.tags) {
      this.tags = [];
    }
    this.add("tags", tag);
  }
  removeTag(tag: string) {
    this.remove("tags", tag);
  }
  addMenuCategory(menuCategory: string) {
    if (!this.menuCategories) {
      this.menuCategories = [];
    }
    this.add("menuCategories", menuCategory);
  }
  removeMenuCategory(menuCategory: string[]) {
    this.remove("menuCategories", menuCategory);
  }
  addStaff(staff: Staff) {
    this.add("staff", staff);
  }
  getSectionedMenu() {
    //split menu into a category based sectional datastructure
    const data = this.menu?.reduce((accumulator, currentValue) => {
      let sectionalEntry = accumulator.find(
        (item) => item.title === currentValue.category
      );
      if (!sectionalEntry) {
        accumulator.push({
          title: currentValue.category,
          data: [currentValue],
        });
      } else {
        sectionalEntry.data.push(currentValue);
      }
      return accumulator;
    }, []);
    return data ?? [];
  }
  getPopularMenu() {
    return this.menu?.filter((item) => item?.popular);
  }
  milesTo = (coordinates: ICoordinates) => {
    return this.address.coordinates?.milesTo(coordinates);
  };

  openingHours() {
    const openHourIntervals = `${ShopDay.openTimeStr(
      this.availability[getDay() as string]
    )} - ${ShopDay.closeTimeStr(this.availability[getDay()])}`;
    return openHourIntervals;
  }

  async setShopOpen() {
    let errortext = undefined;
    try {
      if (this.opened) {
        //this should go when we integrate a form module

        if (!this.image) {
          errortext = "Please add an image for your shop.";
        } else if (!this.category) {
          errortext = "Please select a category for your shop";
        } else if (!this.name) {
          errortext = "Please add a name for your shop";
        } else if (!this.phone) {
          errortext = "Please add a phone number for your shop";
        } else if (!phoneNumberValidator(this.phone)) {
          errortext = "Please add a valid phone number, (ex: 024-222-3344)";
        } else if (!this.address) {
          errortext = "Please add a valid address for your shop";
        } else if (!(this.menu?.length > 0)) {
          errortext = "Please add a menu for your shop";
        } else {
          const areDaysAvailable = Object.values(this.availability).some(
            (entry) => entry.opened
          );
          if (!areDaysAvailable) {
            errortext = "At least one day should be opened";
          }
        }
      }
      if (errortext) {
        return Promise.reject(
          "Your shop cannot be opened at this time. " + errortext
        );
      } else {
        this.opened = true;
        await this.save();
        // this will trigger a server side validation that mostly goes through the same validation steps.
      }
    } catch (err: any) {
      return Promise.reject(err.message);
    }
  }
}
