import * as React from 'react';

import { Box, Text, Heading } from 'components/ui-provider';

const TransactionDetail: React.FC = () => (
  <>
    <Heading textAlign="center" m="0" fontWeight="300" scale={500}>
      Daftar Transaksi
    </Heading>
    <Box my="20px">
      <Text display="block" scale={500} fontWeight="700" mb="5px">
        Halo Kak!
      </Text>
    </Box>
  </>
);

export default TransactionDetail;
