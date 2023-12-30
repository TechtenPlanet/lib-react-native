import Parse from 'parse/react-native'
import { Customer } from "..";

export interface IReview extends Parse.Object {
    customer: Customer;
    rating: number;
    review: string;
    imageUri: string
}