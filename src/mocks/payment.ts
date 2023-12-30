import { IPayment, MOMO_TYPES, PAYMENT_METHODS } from 'lib_cloud/parse/class/ecommerce/payment/types';

export const paymentList: IPayment[] = [
  {
    method: PAYMENT_METHODS.MOMO,
    type: MOMO_TYPES.MTN,
    phoneNumber: '+233593870598',
    otpValidated: false,
    countryCode: '233',
    active: false,
  },
  {
    method: PAYMENT_METHODS.MOMO,
    type: MOMO_TYPES.MTN,
    phoneNumber: '+233203836463',
    otpValidated: true,
    countryCode: '233',
    active: true,
  },
];
