import Parse from "parse/react-native";
import { ParseFunctions } from "../parseFunctions";
import { Shop } from ".";
import { ICoordinates } from "../address/types";

interface PartnerByFilterParams {
  categories: string[];
  searchValue?: string;
}

export class ShopActions extends ParseFunctions {
  createNewShop = async () => {
    return await this.performAction(Parse.Cloud.run("setShop"));
  };

  getNearByShops(coordinates: ICoordinates | undefined): Parse.Query<Shop> {
    const point = new Parse.GeoPoint(coordinates);
    const DISTANCE = 10; //Distance to cover for store search in km
    const query = new Parse.Query(Shop);
    query.equalTo("active", true);
    // query.withinKilometers("coordinates", point, DISTANCE); TODO: define distance constraint

    return query;
  }

  getShopsByCategory({
    categories,
    searchValue,
  }: PartnerByFilterParams): Parse.Query<Shop> {
    const query = new Parse.Query(Shop);
    // query.include("menu");
    query.containedIn("categories", categories);
    if (searchValue) query.contains("name", searchValue);

    return query;
  }
}
