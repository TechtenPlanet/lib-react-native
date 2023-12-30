import Parse from 'parse/react-native'
import {
  CartItem,
  Order,
  Payment,
  Shop,
  Staff,
  User,
  Wallet,
} from "../..";
import { ORDER_STATUS } from "../order/types";

export enum IPartnerType {
  SHOP_MANAGER = "SHOP_MANAGER",
  FLEET_MANAGER = "FLEET_MANAGER",
}
export interface IPartner extends Parse.Object {
  email: string;
  fullname: string;
  phone: string;
  shops: Shop[];
  currentShop: Shop;
  payment: Payment;
  user: User;
  activeOrders: Order[];
  staff: Staff[];
  history: IHistoryItem[];
  wallet: Wallet;
  walletDisplay: number;
  partnerType: IPartnerType;
}


export interface IHistoryItem {
  orderNumber: string;
  shop: Shop;
  quantity: number;
  status: ORDER_STATUS;
  partnerName: string;
  staff: string;
  cartItems: CartItem[];
  total: number;
  amountMade: number;
  partnerServiceFeePercentage: number;
}
