/* eslint-disable no-console */
import * as React from 'react';

import { Box, Text } from 'components/ui-provider';
import { DropdownSelector, DropdownItem } from 'components/dropdown';
import { Button } from 'components/button';
import { Circle } from 'components/loading';

const App: React.FC = () => {
  const [value, setValue] = React.useState();
  return (
    <>
      <Box display="flex" justifyContent="center" px="md" py="lg">
        <DropdownSelector onSelect={(item) => setValue(item)} value={value} placeholder="Primary Dropdown" block>
          <DropdownItem value={'40f470d5-5a1f-4d85-9364-3b791a36c2f1'}>Bali</DropdownItem>
          <DropdownItem value={'9e66ed1f-5f4f-4462-abd3-8e8e41f0e229'}>Jakarta</DropdownItem>
          <DropdownItem value={'d75f6c7c-1182-43b6-9675-1b64345226c6'}>Malang</DropdownItem>
        </DropdownSelector>
      </Box>
      <Box display="flex" justifyContent="center" px="md" py="lg">
        <Button type="button" onClick={() => console.dir('console')}>
          Testing
        </Button>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px="md" py="lg">
        <Circle />
        <Text scale={500} display="block" m="30px">
          Testing
        </Text>
      </Box>
    </>
  );
};

export default App;
