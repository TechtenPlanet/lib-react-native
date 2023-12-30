import Parse from 'parse/react-native'
import { POrder, Shop, PWallet } from "lib_cloud/parse";

export interface IStaff extends Parse.Object {
  name: string;
  shop: Shop;
  jobs: POrder;
  wallet: PWallet;
}
