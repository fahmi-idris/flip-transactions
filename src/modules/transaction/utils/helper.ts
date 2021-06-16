import { SortingType } from 'interfaces/common';
import { Transaction, TransactionFilter, TransactionStatus } from 'interfaces/transactions';

export const statusFormatter = (status: TransactionStatus): string => {
  switch (status) {
    case 'SUCCESS':
      return 'Berhasil';
    case 'PENDING':
      return 'Pengecekan';
    default:
      return '-';
  }
};

export const sortBy = (
  transactions: Transaction[],
  key: keyof Transaction,
  sort: SortingType = 'ASC',
): Transaction[] => {
  return transactions.sort((a: Transaction, b: Transaction) => {
    if (sort === 'ASC') {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    }

    if (a[key] > b[key]) {
      return -1;
    }

    if (a[key] < b[key]) {
      return 1;
    }
    return 0;
  });
};

export const sortTransaction = (transactions: Transaction[], filter?: TransactionFilter): Transaction[] => {
  switch (filter) {
    case 'NAME-ASC':
      return sortBy(transactions, 'beneficiary_name');
    case 'NAME-DESC':
      return sortBy(transactions, 'beneficiary_name', 'DESC');
    case 'DATE-ASC':
      return sortBy(transactions, 'created_at');
    case 'DATE-DESC':
      return sortBy(transactions, 'created_at', 'DESC');
    default:
      return transactions;
  }
};

export const searchTransaction = (transactions: Transaction[], query: string): Transaction[] => {
  if (query) {
    const trimmedQuery = query.toLowerCase().trim();
    return transactions.filter(
      ({ beneficiary_name, beneficiary_bank, sender_bank }) =>
        beneficiary_bank.toLowerCase().indexOf(trimmedQuery) > -1 ||
        beneficiary_name.toLowerCase().indexOf(trimmedQuery) > -1 ||
        sender_bank.toLowerCase().indexOf(trimmedQuery) > -1,
    );
  }

  return transactions;
};
