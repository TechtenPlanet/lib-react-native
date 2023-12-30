import Parse from "parse/react-native";
import { ParseFunctions } from "../../parseFunctions";
import { MenuItem } from ".";
import { ICategorizedMenuItem, IMenuItem } from "./types";

export class MenuItemActions extends ParseFunctions {
  getMenuItems = (
    menuIds: string[],
    categories?: string[]
  ): Parse.Query<MenuItem> => {
    const menuItemQuery = new Parse.Query(MenuItem);
    if (categories) menuItemQuery.containedIn("category", categories);
    menuItemQuery.containedIn("objectId", menuIds);
    menuItemQuery.include("partner");

    return menuItemQuery;
  };

  getPartnerMenuItems = (menuIds: []): Parse.Query<MenuItem> => {
    const menuItemQuery = new Parse.Query(MenuItem);
    menuItemQuery.containedIn("objectId", menuIds);
    menuItemQuery.include("partner");
    return menuItemQuery;
  };

  categorize(menuItems: IMenuItem[]) {
    return menuItems.reduce(
      (allMenuItems: ICategorizedMenuItem[], menuItem) => {
        const options = menuItem.options?.map((option) => option) || [];

        const categoryName = menuItem.category;

        const categoryAdded = allMenuItems.find(
          (item) => item.category === categoryName
        );

        if (!categoryAdded) {
          allMenuItems.push({
            category: menuItem.category,
            data: [menuItem],
          });
        } else {
          allMenuItems.forEach((item) => {
            if (item.category === categoryName) item.data.push(menuItem);
          });
        }

        return allMenuItems;
      },
      []
    );
  }
}
