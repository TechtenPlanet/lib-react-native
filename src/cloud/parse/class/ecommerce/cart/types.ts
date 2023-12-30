import Parse from 'parse/react-native'
import { CartItem } from ".";
import { Address, Payment, Shop } from "../..";
import { MenuItem, MenuOption } from "../menuitem";

export interface ICart extends Parse.Object {
  shop: Shop;
  cartItems: CartItem[];
  destinationAddress: Address;
  payment: Payment;
  notes: string;

  addCartItem: (cartItem: CartItem) => void;
  removeCartItem: (cartItem: CartItem) => void;
  updateCartItem: (cartItem: CartItem, newCartItem: CartItem) => void;
  setDestinationAddress: (address: Address) => void;
  setPayment: (payment: Payment) => void;
  getCartItem: (itemId: string) => void;
  setNotes: (notes: string) => void;
  total: () => number;

  shopId: () => string;
  shopName: () => string;
  count: () => number;
  originAddress: () => Address;
}


export interface ICartItem {
  id: string;
  item: MenuItem;
  quantity: number;
  notes: string;
  options: MenuOption[];
  price: number;
  setQuantity: (quantity: number) => void;
  addOption: (option: MenuOption) => void;
  requiredOptionAdded: () => boolean;
  optionTotal: () => number;
  optionText: () => string;
  clone: () => ICartItem;
  getPrice: () => number;
  total: () => number;
}
