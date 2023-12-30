import Parse from 'parse/react-native'
export enum MENU_OPTION_SELECT {
    SINGLESELECT = "Single Select",
    MULTISELECT = "Multi Select",
  }
  export interface IMenuOptionValue {
    name: string;
    price: number;
    stock?: number;
    description?: string;
  }
  
  export interface IMenuOption {
    type: MENU_OPTION_SELECT;
    description: string;
    required?: boolean;
    values: IMenuOptionValue[];
  }
  
  export interface ICategorizedMenuItem {
    category: string;
    data: IMenuItem[];
  }
  
  export interface IMenuItem extends Parse.Object {
    options?: IMenuOption[];
    price: number;
    maxQuantity: number;
    stock: number;
    category: string;
    available: boolean;
    name: string;
    description?: string;
    image?: string;
    tags?: string[];
    rating?: number;
    popular?: boolean;
  }
  