import React, { createContext, FC, useContext, useEffect, useState } from 'react';

import { TransactionContextObject, Transaction } from 'interfaces/transactions';
import { DataMap } from 'interfaces/common';

import { ScreenLoading } from 'components/loading';

import { api } from 'utils/api';
import { formatGrandTotal, formatTransactionsReponse } from './utils/formatter';

const initialValue: TransactionContextObject = {
  isLoading: true,
  transactions: [],
  total: 0,
};

const TransactionContext = createContext<TransactionContextObject>(initialValue);

const TransactionsProvider: FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [errors, setErrors] = useState<string>();

  useEffect(() => {
    api<DataMap<Transaction>>('/frontend-test')
      .then((response) => {
        const grandTotal = formatGrandTotal(response);
        const data = formatTransactionsReponse(response);
        setTotal(grandTotal);
        setTransactions(data);
      })
      .catch((err) => setErrors(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <ScreenLoading />;
  }

  return (
    <TransactionContext.Provider
      value={{
        isLoading,
        transactions,
        total,
        errors,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionsProvider;

export const useTransactions = (): TransactionContextObject => useContext(TransactionContext);
