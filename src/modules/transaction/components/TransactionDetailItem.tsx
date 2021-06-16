import * as React from 'react';

import { Transaction } from 'interfaces/transactions';
import { toIdrCurrency, toLocaleDate, toUppercase } from 'utils/formatter';

import { IconInbox } from 'components/ui-icons';
import { Box, Text, Stack, colors, radii } from 'components/ui-provider';

type TransactionDetailItemProps = Pick<
  Transaction,
  | 'account_number'
  | 'amount'
  | 'beneficiary_bank'
  | 'beneficiary_name'
  | 'created_at'
  | 'remark'
  | 'sender_bank'
  | 'unique_code'
>;

const TransactionDetailItem: React.FC<TransactionDetailItemProps> = ({
  account_number,
  amount,
  beneficiary_bank,
  beneficiary_name,
  created_at,
  remark,
  sender_bank,
  unique_code,
}) => (
  <Box background={colors.white} padding="20px" borderRadius={radii.sm} display="flex" alignItems="flex-start">
    <Box flex="0">
      <IconInbox width={50} height={50} fill={colors.orange} />
    </Box>
    <Box flex="1" padding="0 20px">
      <Stack spacing="md">
        <Box>
          <Text display="block" fontWeight="600" mb="4px">
            Pengirim
          </Text>
          <Text display="block">{toUppercase(sender_bank)}</Text>
        </Box>
        <Box>
          <Text display="block" fontWeight="600" mb="4px">
            Penerima
          </Text>
          <Text display="block" mb="3px">
            {toUppercase(beneficiary_bank)}
          </Text>
          <Text display="block" mb="3px">
            {account_number}
          </Text>
          <Text display="block" mb="3px">
            {beneficiary_name}
          </Text>
        </Box>
        <Box>
          <Text display="block" fontWeight="600" mb="4px">
            Nominal
          </Text>
          <Text display="block">{toIdrCurrency(amount)}</Text>
          <Text display="block">Kode Unik: {unique_code}</Text>
        </Box>
        <Box>
          <Text display="block" fontWeight="600" mb="4px">
            Catatan
          </Text>
          <Text display="block">{remark}</Text>
        </Box>
        <Box>
          <Text display="block" fontWeight="600" mb="4px">
            Waktu Dibuat
          </Text>
          <Text display="block">{toLocaleDate(created_at)}</Text>
        </Box>
      </Stack>
    </Box>
  </Box>
);

export default TransactionDetailItem;
