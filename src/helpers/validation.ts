import { DIGITALADDRESSREGEX, EMAILREGEX, PHONENUMBERREGEX } from "lib_constants";
import moment from "moment-timezone";


export const guid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
export const phoneNumberValidator = (phone: string): boolean => {
  if (!phone || phone.length <= 0) {
    return false;
  }
  if (!PHONENUMBERREGEX.test(phone)) {
    return false;
  }

  return true;
};

export const digitalAddressValidator = (digitalAddress: string) => {
  if (!DIGITALADDRESSREGEX.test(digitalAddress)) {
    return "Invalid phone number. (ex: 024-222-3344)";
  }

  return "";
};

export const emailValidator = (email: string) => {

  if (!email || email.length <= 0) {
    return "Email cannot be empty.";
  }
  if (!EMAILREGEX.test(email)) {
    return "Invalid  email address. (ex: name@email.com)";
  }

  return "";
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) {
    return "Empty password.";
  }
  if (!password || password.length < 8) {
    return "Require 8 characters";
  }

  return "";
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) {
    return "Name cannot be empty.";
  }

  return "";
};

export const textValidator = (text: string) => {
  if (!text || text.length <= 0) {
    return `${text} cannot be empty.`;
  }

  return "";
};

export const formatStandardTime = (date: Date) => {
  const unix = moment(date);
  return unix.tz("GMT").format("hh:mm A");
};
