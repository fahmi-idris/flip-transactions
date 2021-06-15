import React from 'react';
import styled from 'styled-components';

import Circle from './Circle';

const ScreenLoading: React.FC = () => (
  <Wrapper>
    <Circle />
  </Wrapper>
);

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  flex: 1 auto;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export default ScreenLoading;
