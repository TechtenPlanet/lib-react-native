import Parse from 'parse/react-native'
import { PUser } from ".";
import { ParseFunctions } from "../parseFunctions";

export class UserActions extends ParseFunctions  {
  constructor() {
    super();
  }
  async register({ fullname, email, phone, password }: PUser) {
    const user = new PUser();
    user.password = password;
    user.fullname = fullname;
    user.username = email;
    user.phone = phone;
    await this.performAction(user.signUp());
    await user.fetch();
    return user;
  }

  async signIn({ email, password }: PUser) {
    const user = new PUser();
    user.setUsername(email);
    user.setPassword(password);
    await this.performAction(user.logIn());
    await user.fetch();
    return user;
  }

  async signInGuest() {
    await this.performAction(Parse.AnonymousUtils.logIn());
    return this.getCurrentUser();
  }

  async update({ email, phone }: PUser) {
    const user = await this.getCurrentUser();
    if (!user) return;

    const customer = user.customer;
    customer.phone = phone;
    await customer.save();

    user.username = email;
    return this.performAction(user.save());
  }

  async changePassword({ password }: PUser) {
    const user = await this.getCurrentUser();
    if (!user) return;
    user.password = password;
    return this.performAction(user.save());
  }

  async getCurrentUser() {
    return this.performAction(PUser.currentAsync());
  }

  async logout() {
    return this.performAction(Parse.User.logOut());
  }

  async resetPassword({ email }: PUser) {
    this.performAction(Parse.User.requestPasswordReset(email));
  }
}
