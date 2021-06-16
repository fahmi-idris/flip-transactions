import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { Transaction } from 'interfaces/transactions';

import { Box, Text, colors, radii } from 'components/ui-provider';
import { Badge } from 'components/badge';

import { toIdrCurrency, toLocaleDate, toUppercase } from 'utils/formatter';
import { statusFormatter } from '../utils/helper';

interface TransactionItemListProps {
  transactions: Transaction[];
}

const TransactionItemList: React.FC<TransactionItemListProps> = ({ transactions }) => {
  const history = useHistory();
  return (
    <Box margin="20px 0">
      {transactions.map((data) => {
        const { sender_bank, beneficiary_bank, beneficiary_name, amount, created_at, status, id } = data;
        return (
          <Box
            key={id}
            background={colors.white}
            padding="20px"
            borderRadius={radii.sm}
            mb="10px"
            borderLeft={`4px solid ${status === 'SUCCESS' ? colors.green : colors.orange}`}
            className="pointer"
            onClick={() => history.push(`/${id}/transaction`)}
          >
            <Box display="flex" alignItems="center">
              <Box flex="1">
                <Text mb="5px" fontWeight="600" display="block">
                  {toUppercase(`${sender_bank} ➔ ${beneficiary_bank}`)}
                </Text>
                <Text mb="5px" display="block">
                  {toUppercase(beneficiary_name)}
                </Text>
                <Text mb="5px" display="block">
                  {`${toIdrCurrency(amount)} • ${toLocaleDate(created_at)}`}
                </Text>
              </Box>
              <Box flex="0">
                <Badge
                  variant={status === 'SUCCESS' ? 'primary' : 'outline'}
                  badgeColor={status === 'SUCCESS' ? colors.green : colors.orange}
                >
                  {statusFormatter(status)}
                </Badge>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default TransactionItemList;
