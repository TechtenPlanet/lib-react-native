import Parse from 'parse/react-native'
import {
  Address,
  CartItem,
  Customer,
  Payment,
  Rider,
  Shop,
  User,
} from "..";
import {  } from ".";
import { ICoordinates } from "../address/types";

export enum ORDER_STATUS { //Maintain order of status, so determine what needs to come after what
  requested = "requested",
  cancelled = "cancelled", //by user
  declined = "declined", //by shop
  refunded = "refunded",
  created = "created",
  waitingForPayment = "waitingForPayment",
  preparing = "preparing",
  assigned = "assigned",
  ready = "ready",
  pickedup = "pickedup",
  enroute = "enroute",
  delivered = "delivered",
  completed = "completed",
}

export interface IOrder extends Parse.Object {
  objectId: string; //used for creating ORder object from history item
  cartItems: CartItem[];
  coordinates: ICoordinates;
  origin: Address;
  destination: Address;
  user: User;
  customer: Customer;
  shop: Shop;
  serviceFee: number;
  total: number;
  notes: string;
  status: string;
  quantity: number;
  payment: Payment;
  shopname: string;
  deliveryFee: number;
  shopnumber: string;
  paid: boolean;
  shopConfirmedPickup: boolean;
  availableForPickup: boolean;
  active: boolean;
  deliveryRoute: ICoordinates[];
  staff: string;
  deliveryDistance: number;
  deliveryDuration: number;
  rider: Rider;
  riderPic: string;
  riderName: string;
  riderServiceFeePercentage: number;
  partnerServiceFeePercentage: number;
  timedout: boolean;
  transactionId: string;
  tax: number;
  tip: number;

  orderNumber: () => {};
  orderNumberText: () => {};
  userphone: () => {};
  username: () => {};
  subTotal: () => {};
}
