import React, { useMemo } from 'react';

import { Container, List } from 'lib_components/.';
import { paymentList } from '../../mocks';
import { IPayment } from 'src/cloud/parse/class/payment/types';
// import useActions from './actions';
// import styles from './styles';

interface PaymentMethodsProps {}

export const PaymentMethods: React.FC<PaymentMethodsProps> = ({}) => {
  //   const {

  //   } = useActions();
  console.log(paymentList)
  const newList = useMemo(
    () => paymentList?.map((payment: IPayment) => ({ title: payment.phoneNumber, ...payment }), [paymentList]),
    []
  );
    return (
    <Container>
      <List data={newList} />
    </Container>
  );
};
export default PaymentMethods;
