import Parse from "parse/react-native";

import { ParseFunctions } from "../parseFunctions";
import { Order } from ".";

export class OrderActions extends ParseFunctions {
  fetchOrders = ({ user, active }: Order): Parse.Query<Order> => {
    const query = new Parse.Query(Order);
    query.equalTo("user", user);
    query.equalTo("active", active);
    query.include("cartItems");
    query.include("rider");
    return query;
  };
  request = (order: Order) => {
    const body = { order: order.toJSON() };
    return this.performAction(Parse.Cloud.run("requestOrder", body));
  };

  //Partner accept order
  accept = (order: Order, staff: string) => {
    const body = {
      orderId: order.id,
      response: "accept",
      staff: staff,
    };
    return this.performAction(Parse.Cloud.run("orderPartnerResponse", body));
  };
  decline = (order: Order) => {
    const body = {
      orderId: order.id,
      response: "decline",
    };
    return this.performAction(Parse.Cloud.run("orderPartnerResponse", body));
  };
  cancel = (order: Order) => {
    const body = {
      orderId: order.id,
    };
    return this.performAction(Parse.Cloud.run("cancelOrder", body));
  };

  assign = (order: Order) => {
    const body = {
      orderId: order.id,
    };
    return this.performAction(Parse.Cloud.run("assignOrder", body));
  };

  ready = (order: Order) => {
    const body = {
      orderId: order.id,
    };
    return this.performAction(Parse.Cloud.run("readyOrder", body));
  };

  pickup = (order: Order) => {
    const body = {
      orderId: order.id,
    };
    return this.performAction(Parse.Cloud.run("pickuOrder", body));
  };

  orderPickedUp = (order: Order) => {
    const body = {
      orderId: order.id,
    };
    return this.performAction(Parse.Cloud.run("orderPickedUp", body));
  };

  deliver = (order: Order) => {
    const body = {
      orderId: order.id,
    };
    return this.performAction(Parse.Cloud.run("deliverOrder", body));
  };

  orderDelivered = (order: Order) => {
    const body = {
      orderId: order.id,
    };
    return this.performAction(Parse.Cloud.run("orderDelivered", body));
  };

  complete = (order: Order) => {
    const body = {
      orderId: order.id,
    };
    return this.performAction(Parse.Cloud.run("completeOrder", body));
  };
}
