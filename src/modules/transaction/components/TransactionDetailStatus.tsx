import * as React from 'react';

import { TransactionStatus } from 'interfaces/transactions';

import { Box, Text, colors, radii } from 'components/ui-provider';
import { Badge } from 'components/badge';

import { statusFormatter } from '../utils/helper';

interface TransactionDetailStatusProps {
  id: string;
  status: TransactionStatus;
}

const TransactionDetailStatus: React.FC<TransactionDetailStatusProps> = ({ id, status }) => (
  <Box background={colors.white} my="20px" borderRadius={radii.sm}>
    <Box display="flex" alignItems="center" padding="20px">
      <Box flex="1">
        <Text fontWeight="600">{`ID TRANSAKSI #${id}`}</Text>
      </Box>
      <Badge
        variant={status === 'SUCCESS' ? 'primary' : 'outline'}
        badgeColor={status === 'SUCCESS' ? colors.green : colors.orange}
      >
        {statusFormatter(status)}
      </Badge>
    </Box>
  </Box>
);

export default TransactionDetailStatus;
