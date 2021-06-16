export type TransactionStatus = 'PENDING' | 'SUCCESS';

export type TransactionFilter = 'NAME-ASC' | 'NAME-DESC' | 'DATE-ASC' | 'DATE-DESC';

export interface Transaction {
  id: string;
  amount: number;
  unique_code: number;
  status: TransactionStatus;
  sender_bank: string;
  account_number: string;
  beneficiary_name: string;
  beneficiary_bank: string;
  remark: string;
  created_at: string;
  completed_at: string;
  fee: number;
}

export interface TransactionContextObject {
  isLoading: boolean;
  transactions: Transaction[];
  transaction?: (transactionId: string) => Transaction;
  total: number;
  errors?: string;
}
