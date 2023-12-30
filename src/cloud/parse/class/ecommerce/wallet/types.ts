import Parse from 'parse/react-native'
import { Payment, User } from "..";

export interface IWallet extends Parse.Object {
  amount: number;
  user: User;
  paymentMethods: Payment[];
}
