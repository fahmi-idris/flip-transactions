/* eslint-disable no-console */
import * as React from 'react';

import { Box, Text, colors } from 'components/ui-provider';
import { IconSearch } from 'components/ui-icons';
import { DropdownSelector, DropdownItem } from 'components/dropdown';
import { Button } from 'components/button';
import { Circle } from 'components/loading';
import { Badge } from 'components/badge';
import { FieldContainer, Label, Field, CheckBox, RadioButton } from 'components/form';

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
        <Button type="button" onClick={() => console.dir('console')} size="small" variant="outline">
          Kembali
        </Button>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" px="md" py="lg">
        <Circle />
        <Text scale={500} display="block" m="30px">
          Testing
        </Text>
        <Badge variant="primary" badgeColor={colors.orange}>
          Berhasil
        </Badge>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" px="md" py="lg">
        <FieldContainer>
          <Label>Default</Label>
          <Field name="default" type="text" placeholder="Lorem ipsum dolor sit amet" />
        </FieldContainer>
        <FieldContainer>
          <Label isRequired>Is Required</Label>
          <Field name="isRequired" type="text" placeholder="Lorem ipsum dolor sit amet" />
        </FieldContainer>
        <FieldContainer>
          <Label>Disabled</Label>
          <Field name="disabled" type="text" placeholder="Lorem ipsum dolor sit amet" disabled />
        </FieldContainer>
        <FieldContainer>
          <Label>With Icon</Label>
          <Field name="withicon" icon={() => <IconSearch />} type="text" placeholder="Lorem ipsum dolor sit amet" />
        </FieldContainer>
        <FieldContainer>
          <Label>Errors</Label>
          <Field name="errors" type="text" placeholder="Lorem ipsum dolor sit amet" errors />
        </FieldContainer>
        <FieldContainer>
          <Label>CheckBox</Label>
          <CheckBox name="checkbox" label="Checkbox" id="checkbox" value="checkbox" />
        </FieldContainer>
        <FieldContainer>
          <Label>Radio Button</Label>
          <RadioButton name="radio" label="Radio Button" id="radio" value="radio" />
        </FieldContainer>
      </Box>
    </>
  );
};

export default App;
