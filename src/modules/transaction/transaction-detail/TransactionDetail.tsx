import * as React from 'react';
import { useHistory, useParams } from 'react-router';

import { useTransactions } from 'context/TransactionsContext';

import { Box, Heading } from 'components/ui-provider';
import { Message } from 'components/message';
import { Button } from 'components/button';
import { TransactionDetailStatus, TransactionDetailItem } from '../components';

const TransactionDetail: React.FC = () => {
  const history = useHistory();
  const { transactionId } = useParams<{ transactionId: string }>();
  const { transaction } = useTransactions();

  const renderDetail = () => {
    if (transaction && transaction(transactionId)) {
      const { id, status, ...rest } = transaction(transactionId);
      return (
        <>
          <TransactionDetailStatus id={id} status={status} />
          <TransactionDetailItem {...rest} />
        </>
      );
    }

    return <Message message="Transaksi tidak ditemukan" state="error" />;
  };

  return (
    <Box margin="0 auto" maxWidth="550px" padding={['20px', '20px 0']}>
      <Heading textAlign="center" m="0" fontWeight="300" scale={500}>
        Detail Transaksi
      </Heading>
      <Box my="20px">{renderDetail()}</Box>
      <Button onClick={() => history.push('/')} variant="outline" size="small">
        Kembali
      </Button>
    </Box>
  );
};

export default TransactionDetail;
