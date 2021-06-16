import { DataMap } from 'interfaces/common';
import { Transaction } from 'interfaces/transactions';

export const formatGrandTotal = (data: DataMap<Transaction>): number => {
  const dataToArray: Transaction[] = Object.values(data);
  return dataToArray.reduce((acc, { amount }) => acc + amount, 0);
};

export const formatTransactionsReponse = (data: DataMap<Transaction>): Transaction[] =>
  Object.keys(data).map((i) => data[i]);
