import Parse from 'parse/react-native'
import { IOrder, ORDER_STATUS } from "./types"
import { ParseBaseClass } from "../baseClasses";
import { Cart } from "..";
import { ICoordinates } from "../address/types";

export const ORDER_CLASSNAME = "Order";
export interface Order extends IOrder {}
export class Order extends ParseBaseClass {
  order;
  constructor(order: IOrder) {
    super(ORDER_CLASSNAME);
    this.fromObject(order);
  }

  // static fromPartnerHistoryItem(historyItem: IOrder) {
  //   this.objectId = historyItem.orderNumber as unknown as string;
  //   this.shop = historyItem.shop;
  //   this.shopname = historyItem.shopname;
  //   this.cartItems = historyItem.cartItems;
  //   this.total = historyItem.total;
  //   this.status = historyItem.status;
  //   this.quantity = historyItem.quantity;
  //   this.staff = historyItem.staff;
  //   return order;
  // }

  get orderNumber() {
    return this.id;
  }
  get orderNumberText() {
    return `Order# ${this.id?.toUpperCase()}`;
  }
  get userphone() {
    return this.user.phone;
  }
  get username() {
    return this.user.phone;
  }
  get subTotal() {
    const subtotal =
      this.subTotal ??
      this.cartItems.reduce((cartPrice, currentCartItem) => {
        return cartPrice + currentCartItem.total;
      }, 0);
    return subtotal;
  }

  atPickupLocation(coordinates: ICoordinates, value: string) {
    // TODO: We may want to use carrier location to test this instead of passing the user location and testing the distance
    const distance = this.origin.coordinates?.milesTo(
      new Parse.GeoPoint(coordinates.latitude, coordinates.longitude)
    );
    // return distance <= DISTANCE_NEAR_FILTER;
    return distance <= parseFloat(value);
  }

  atDropoffLocation(coordinates: ICoordinates, value: string) {
    //TODO: this could cause issues if we are not able to get the
    const distance = this.destination.coordinates?.milesTo(
      new Parse.GeoPoint(coordinates.latitude, coordinates.longitude)
    );
    // return distance <= DISTANCE_NEAR_FILTER;
    return distance <= parseFloat(value);
  }

  normalizedCartItems = undefined;
  get cartItems() {
    if (!this.normalizedCartItems) {
      this.normalizedCartItems = this.cartItems?.map(
        (cartItem) => new Cart(cartItem)
      );
    }
    return this.normalizedCartItems;
  }

  //*** ORDER STATUS ***/
  getStatusIndex() {
    return Object.keys(ORDER_STATUS).indexOf(this.status);
  }
  compareStatusWith(status: string) {
    const orderStatuses = Object.keys(ORDER_STATUS);
    const status1 = orderStatuses.indexOf(this.status);
    const status2 = orderStatuses.indexOf(status);
    return status1 - status2;
  }
  statusLessThan(status) {
    return this.compareStatusWith(status) < 0;
  }
  statusLessThanEqualTo(status) {
    return this.compareStatusWith(status) <= 0;
  }
  statusEqualTo(status) {
    return this.compareStatusWith(status) === 0;
  }
  statusGreaterThan(status) {
    return this.compareStatusWith(status) > 0;
  }
  statusGreaterThanEqualTo(status) {
    return this.compareStatusWith(status) >= 0;
  }

  isCreated() {
    return this.status === ORDER_STATUS.created;
  }
  isCancelled() {
    return this.status === ORDER_STATUS.cancelled;
  }
  isDeclined() {
    return this.status === ORDER_STATUS.declined;
  }
  isPreparing() {
    return this.status === ORDER_STATUS.preparing;
  }
  isAssigned() {
    return this.status === ORDER_STATUS.assigned;
  }
  isReady() {
    return this.status === ORDER_STATUS.ready;
  }
  isPickedup() {
    return this.status === ORDER_STATUS.pickedup;
  }
  isConfirmedPickup() {
    return (
      this.statusGreaterThanEqualTo(ORDER_STATUS.ready) &&
      !this.shopConfirmedPickup
    );
  }
  isEnroute() {
    return this.status === ORDER_STATUS.enroute;
  }
  isDelivered() {
    return this.status === ORDER_STATUS.delivered;
  }
  isCompleted() {
    return this.status === ORDER_STATUS.completed;
  }
  isTrackable() {
    return this.statusGreaterThanEqualTo(ORDER_STATUS.preparing);
  }
  isCancelable() {
    return this.statusLessThanEqualTo(ORDER_STATUS.waitingForPayment);
  }
  isAwaitingMomoPayment() {
    const payment = this.payment
    return !this.paid && payment.isMomoPayment()
  }
  isBeingPrepared() {
    return (
      this.statusGreaterThanEqualTo(ORDER_STATUS.preparing) &&
      this.statusLessThan(ORDER_STATUS.ready)
    );
  }
  isReadyForPickup() {
    return (
      this.statusGreaterThanEqualTo(ORDER_STATUS.ready) &&
      this.statusLessThan(ORDER_STATUS.pickedup)
    );
  }
  isOnTheWay() {
    return (
      this.statusGreaterThanEqualTo(ORDER_STATUS.pickedup) &&
      this.statusLessThan(ORDER_STATUS.delivered)
    );
  }
  isOrderDone() {
    return this.statusGreaterThanEqualTo(ORDER_STATUS.delivered);
  }
}
