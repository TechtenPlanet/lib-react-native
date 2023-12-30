import { ICustomer } from "./types"
import { ParseBaseClass } from "../../baseClasses";
import { Address, Cart, Payment, Shop } from "../..";

export const CUSTOMER_CLASSNAME = "Customer";
export interface Customer extends ICustomer {}
export class Customer extends ParseBaseClass {
  constructor() {
    super(CUSTOMER_CLASSNAME);
  }
  addAddress(address: Address) {
    //TODO: check for duplicates. it's being done in userStore where user address is modified. Do we leave it there or do it here? Refer to this in the future when parse objects are mobx observable
    this.add("addresses", address);
  }

  removeAddress(address: Address) {
    this.remove("addresses", address);
  }
  addPayment(payment: Payment) {
    //TODO: check for duplicates. it's being done in userStore where user payment is modified. Do we leave it there or do it here? Refer to this in the future when parse objects are mobx observable
    this.add("payments", payment);
  }
  removePayment(payment: Payment) {
    this.remove("payments", payment);
  }

  addCartItem(cart: Cart) {
    this.add("carts", cart);
  }

  clearCarts() {
    this.removeAll("carts", this.carts);
  }

  addSavedShop(shop: Shop) {
    this.add("savedShops", shop);
    this.save();
  }
  removeSavedShop(shop: Shop) {
    this.remove("savedShops", shop);
    this.save();
  }
  isSavedShop(shop: Shop) {
    if (!this.savedShops) {
      return false;
    }
    return this.savedShops.some((savedShop) => savedShop.id === shop.id);
  }
}
