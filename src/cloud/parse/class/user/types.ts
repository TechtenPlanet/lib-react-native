import Parse from 'parse/react-native'
export interface IUser extends Parse.User {
  username: string;
  email: string;
  fullname: string;
  phone: string;
  password: string;
  emailVerified: boolean;
}

