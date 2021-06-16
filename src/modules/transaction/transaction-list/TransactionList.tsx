import * as React from 'react';

import { Transaction, TransactionFilter } from 'interfaces/transactions';

import { useTransactions } from 'context/TransactionsContext';
import { Box } from 'components/ui-provider';
import { Message } from 'components/message';

import { searchTransaction, sortTransaction } from '../utils/helper';
import { Welcome, SearchTransaction, TransactionItemList } from '../components';

const TransactionList: React.FC = () => {
  const { errors, transactions, total } = useTransactions();
  const [query, setQuery] = React.useState<string>('');
  const [sortedBy, setSortedBy] = React.useState<TransactionFilter>();
  const [transactionsList, setTransactionsList] = React.useState<Transaction[]>(transactions);

  React.useEffect(() => {
    let data: Transaction[] = [...transactions];
    data = searchTransaction(data, query);
    data = sortTransaction(data, sortedBy);
    setTransactionsList(data);
  }, [sortedBy, query, transactions]);

  const renderList = () => {
    if (errors) {
      return <Message message={errors} mt="20px" state="error" />;
    }

    if (!transactionsList.length) {
      return <Message message={`Pencarian dengan kata ${query} tidak ditemukan`} mt="20px" state="warning" />;
    }

    return <TransactionItemList transactions={transactionsList} />;
  };

  return (
    <Box margin="0 auto" maxWidth="550px" padding={['20px', '20px 0']}>
      <Welcome total={total} />
      <SearchTransaction onSearch={setQuery} onSort={setSortedBy} sortedBy={sortedBy} query={query} />
      {renderList()}
    </Box>
  );
};

export default TransactionList;
