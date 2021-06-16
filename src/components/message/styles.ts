import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import {
  layout,
  LayoutProps,
  position,
  PositionProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  space,
  SpaceProps,
  variant,
} from 'styled-system';

import { messageVariants } from './variants';

export type MessageStates = keyof typeof messageVariants;

export interface BaseMessageProps extends LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps {
  state?: MessageStates;
}

export const BaseMessageStyles = (): FlattenInterpolation<ThemeProps<DefaultTheme>> =>
  css`
    display: flex;
    min-height: 38px;
    border-radius: 4px;
    line-height: 1;
    overflow: hidden;
    ${variant({
      prop: 'state',
      variants: messageVariants,
    })}

    ${layout}
    ${position}
    ${flexbox}
    ${grid}
    ${space}
  `;

export const Inner = styled('div')`
  flex: 1;
  padding: 16px;
`;

export const Root = styled('div')<BaseMessageProps>`
  ${BaseMessageStyles}
`;
