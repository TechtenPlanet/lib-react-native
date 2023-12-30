import Parse from 'parse/react-native'
import { POrder, PPayment, PUser, PWallet } from "lib_cloud/parse";

export interface IJobHistory {}
export interface IRider extends Parse.Object {
  termsAccepted: boolean;
  emergencyContact: object;
  driverLicense: string;
  driverLicenseImageUrl: string;
  payment: PPayment;
  registrationCompleted: boolean;
  validated: boolean;
  user: PUser;
  fullname: string;
  validationNotes: string;
  voterId: string;
  profilePic: string;
  active: boolean;
  registered: boolean;
  job: POrder;
  phone: string;
  email: string;
  activeJob: POrder;
  history: IJobHistory[];
  wallet: PWallet;
  walletDisplay: number;
  averageRating: string;
  ratings: string;
}
