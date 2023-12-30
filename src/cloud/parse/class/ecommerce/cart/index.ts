import { Address, Payment } from "../..";
import { ParseBaseClass } from "../../baseClasses";
import { CartItem } from "./CartItem";
import { ICart } from "./types";

export * from './CartItem'
export const CART_CLASSNAME = "Cart";
export interface Cart extends ICart {}
export class Cart extends ParseBaseClass {
  constructor(cart?: ICart) {
    super(CART_CLASSNAME);
    this.fromObject(cart);
    if (!this.cartItems) {
      this.cartItems = [];
    }
  }

  async addCartItem(cartItem: CartItem) {
    const existingCartItem = this.getCartItem(cartItem.item.id);
    if (existingCartItem) {
      const isOptionsSame = this.isCartOptionsSame(existingCartItem, cartItem);

      if (isOptionsSame) {
        existingCartItem.quantity += cartItem.quantity;
      } else {
        this.cartItems.push(cartItem);
      }
    } else {
      this.cartItems.push(cartItem);
    }
    return await this.pin();
  }
  removeCartItem(cartItem: CartItem) {
    this.cartItems = this.cartItems.filter((item) => item.id !== cartItem.id);
    this.unPin(); //TODO: temp solution.
  }
  updateCartItem(cartItem: CartItem, newCartItem: CartItem) {
    var index = this.cartItems.indexOf(cartItem);
    if (index !== -1) {
      this.cartItems[index] = newCartItem;
    }
  }

  setPayment(payment: Payment) {
    this.payment = payment;
  }

  shopId() {
    return this.shop?.id;
  }

  shopName() {
    return this.shop?.name;
  }

  count(): number {
    return this.cartItems.reduce(
      (cartCount: number, currentCartItem: CartItem) => {
        return cartCount + currentCartItem.quantity;
      },
      0
    );
  }

  total(): number {
    return this.cartItems.reduce((cartPrice, currentCartItem) => {
      return cartPrice + currentCartItem.total();
    }, 0);
  }

  originAddress(): Address {
    return this.shop.address;
  }

  getCartItem(itemId: string) {
    return (
      this.cartItems?.find((cartItem) => cartItem.item.id === itemId) || null
    );
  }

  isCartOptionsSame(existingCartItem: CartItem, cartItem: CartItem) {
    return existingCartItem.options.every((option) =>
      cartItem.options.some((cartItemOption) => {
        return (
          cartItemOption.description === option.description &&
          cartItemOption.name === option.name
        );
      })
    );
  }

  setNotes(notes: string) {
    this.notes = notes;
  }

}
