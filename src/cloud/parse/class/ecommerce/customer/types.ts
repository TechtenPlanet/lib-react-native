import Parse from 'parse/react-native'
import { Address, Cart, Order, Payment, Shop, User  } from "../..";

export interface ICustomer extends Parse.Object {
  user: User;
  fullname: string;
  address?: Address;
  addresses?: Address[];
  phone?: string;
  email?: string;
  payment?: Payment;
  payments?: Payment[];
  carts?: Cart[];
  activeOrder?: Order;
  savedShops?: Shop[];
  addAddress: (address: Address) => void;
  removeAddress: (address: Address) => void;
  addPayment: (payment: Payment) => void;
  removePayment: (payment: Payment) => void;
  addCartItem: (cart: Cart) => void;
  clearCart: (cart: Cart) => void;
  addSavedShop: (shop: Shop) => void;
  removeSavedShop: (shop: Shop) => void;
  isSavedShop: (shop: Shop) => void;
}
