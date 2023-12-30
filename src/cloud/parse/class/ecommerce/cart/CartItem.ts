import { BaseClass } from "../../baseClasses";
import { ICartItem } from "./types";
import { MenuOption } from "../menuitem";
import { IMenuOptionValue } from "../menuitem/types";

export interface CartItem extends ICartItem { }
export class CartItem extends BaseClass {
  constructor(cartItem: CartItem) {
    super();
    this.fromObject(cartItem);
  }

  clone() {
    return new CartItem(this);
  }

  getPrice() {
    return this.item.price;
  }

  addOption = (option: MenuOption) => {
    this.options.push(option);
  };

  requiredOptionAdded() {
    if (!this.item.options) {
      return true;
    }
    const requiredOptions = this.item.options.every((option) => {
      if (option.required) {
        return this.options.some(
          (testOption) => testOption.description === option.description
        );
      }
      return true;
    });
    return requiredOptions;
  }

  optionTotal() {
    return this?.options?.reduce((optionAccumulator: number, currentOption: MenuOption) => {
      return (
        optionAccumulator +
        currentOption?.values?.reduce(
          (optionValueAccumulator: number, currentOptionValue: IMenuOptionValue) => {
            return optionValueAccumulator + currentOptionValue.price;
          },
          0
        )
      );
    }, 0) ?? 0;
  }

  optionText() {
    return this.options.reduce((optionAccumulator: string, currentOption: MenuOption) => {
      return (
        optionAccumulator +
        (optionAccumulator ? ", " : "") +
        currentOption.values.reduce(
          (optionValueAccumulator: string, currentOptionValue: IMenuOptionValue) => {
            return (
              optionValueAccumulator +
              (optionValueAccumulator ? ", " : "") +
              currentOptionValue.name
            );
          },
          ""
        )
      );
    }, "");
  }

  total() {
    return this.quantity * this.price;
  }
}
