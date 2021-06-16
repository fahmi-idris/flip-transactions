import { css, FlattenInterpolation, ThemeProps } from 'styled-components';
import { layout, position, flexbox, grid, space, border } from 'styled-system';

import { fonts, colors } from 'components/ui-provider';
import { BadgeBaseProps } from '../types/types';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const BadgeBase = css`
  margin: 0;
  padding: 8px 15px;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  background: none;
  text-decoration: none;
  line-height: 1;
  letter-spacing: 0.2px;
  border-radius: 6px;
  border: 1px solid transparent;
  font-family: ${fonts.lato};
  &:hover,
  &:focus {
    text-decoration: none;
  }
  &:focus {
    outline: 0px;
  }
`;

export const BadgeStyles = (props: BadgeBaseProps): FlattenInterpolation<ThemeProps<any>> => css`
  ${BadgeBase}
  ${props.variant === 'primary' &&
  `
    background: ${props.badgeColor};
    color: ${colors.white};
  `}

  ${props.variant === 'outline' &&
  `
    color: ${colors.black};
    border: 1px solid ${props.badgeColor};
  `}

  ${layout}
  ${position}
  ${flexbox}
  ${grid}
  ${space}
  ${border}
`;
