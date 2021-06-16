import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { colors } from 'components/ui-provider';

export interface Props {
  children: ReactNode;
}

const Error: FC<Props> = ({ children }) => <InputMessage>{children}</InputMessage>;

const InputMessage = styled('div')`
  color: ${colors.danger};
  font-size: 10px;
  margin-top: 4px;
  text-align: left;
`;

export default Error;
