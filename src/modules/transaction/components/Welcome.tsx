import * as React from 'react';

import { Box, Text, Heading, colors } from 'components/ui-provider';
import { toIdrCurrency } from 'utils/formatter';

interface WelcomeProps {
  total: number;
}

const Welcome: React.FC<WelcomeProps> = ({ total }) => (
  <>
    <Heading textAlign="center" m="0" fontWeight="300" scale={500}>
      Daftar Transaksi
    </Heading>
    <Box my="20px">
      <Text display="block" scale={500} fontWeight="700" mb="5px">
        Halo Kak!
      </Text>
      <Text display="block">
        Kamu telah melakukan transaksi sebesar{' '}
        <Text color={colors.orange} fontWeight="600">
          {toIdrCurrency(total)}
        </Text>{' '}
        sejak menggunakan Flip.
      </Text>
    </Box>
  </>
);

export default Welcome;
