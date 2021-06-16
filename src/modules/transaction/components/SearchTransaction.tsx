import * as React from 'react';
import styled from 'styled-components';

import { TransactionFilter } from 'interfaces/transactions';

import { Box, colors } from 'components/ui-provider';
import { IconSearch } from 'components/ui-icons';
import { DropdownSelector, DropdownItem } from 'components/dropdown';
import { Field } from 'components/form';

interface SearchTransactionProps {
  onSort: (value?: TransactionFilter) => void;
  onSearch: (value: string) => void;
  sortedBy?: TransactionFilter;
  query: string;
}

const SearchTransaction: React.FC<SearchTransactionProps> = ({ onSearch, onSort, query, sortedBy }) => (
  <Box display="flex">
    <Box flex="0 1 70%">
      <FieldStyled
        name="search"
        type="text"
        placeholder="Cari nama atau bank"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        icon={() => <IconSearch fill={colors.muted} />}
      />
    </Box>
    <Box flex="0 1 30%">
      <DropdownStyled onSelect={(item) => onSort(item)} value={sortedBy} placeholder="URUTKAN" block>
        <DropdownItem value="NAME-ASC">Nama A-Z</DropdownItem>
        <DropdownItem value="NAME-DESC">Nama Z-A</DropdownItem>
        <DropdownItem value="DATE-ASC">Tanggal terlama</DropdownItem>
        <DropdownItem value="DATE-DESC">Tanggal terbaru</DropdownItem>
      </DropdownStyled>
    </Box>
  </Box>
);

const FieldStyled = styled(Field)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
`;

const DropdownStyled = styled(DropdownSelector)`
  button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

export default SearchTransaction;
