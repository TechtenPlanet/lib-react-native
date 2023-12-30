import Parse from "parse/react-native";
import { ParseFunctions } from "../../parseFunctions";
import { Cart, CartItem } from ".";
import { ICart } from "./types";

export class CartActions extends ParseFunctions {
  fetchCart = async (data: ICart): Promise<Cart> => {
    const query = new Parse.Query(Cart);
    query.fromLocalDatastore();
    query.equalTo("shop", data.shop);
    query.descending("createdAt");
    query.include("menuItem");
    let cart = (await this.performAction(query.first())) as Cart;
    if (!cart) {
      cart = new Cart(data);
      cart = await cart.save();
      cart.pin();
    }
    return cart;
  };
  fetchCarts = async (): Promise<Cart[]> => {
    const query = new Parse.Query(Cart);
    query.fromLocalDatastore();
    query.include("menuItem");
    //TODO: normalized data samples should
    const results = (await this.performAction(query.find())) as Cart[];
    results?.forEach(
      (item) =>
        (item.cartItems = item.cartItems.map((item) => new CartItem(item)))
    );
    return results;
  };
}
