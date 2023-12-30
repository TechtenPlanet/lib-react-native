import accounting from 'accounting';

export const formatCurrency = (
  amount: number,
  minimumFractionDigits = 2,
  symbol = '\u20B5',
) => {
  try {
    return accounting.formatMoney(amount, symbol, minimumFractionDigits);
  } catch (error) {}
};
