import { css, FlattenSimpleInterpolation } from 'styled-components';

import { colors, componentStyles } from 'components/ui-provider';
import { ButtonBaseProps } from '../types/types';

export const ButtonDisabled = css`
  border-color: ${colors.gray3};
  background-color: ${colors.gray3};
  color: ${colors.gray1};
`;

export const ButtonDefault = css`
  color: #3b4856;
  background-color: #e7eaee;
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      color: rgba(59, 72, 86, 0.8);
      background-color: rgba(231, 234, 238, 0.8);
    }
    &:focus,
    &.focus,
    &:active,
    &.active {
      color: #3b4856;
      background-color: #e7eaee;
    }
  }
  &:disabled,
  &.disabled {
    ${ButtonDisabled}
  }
`;

export const ButtonPrimary = css`
  background-color: ${colors.orange};
  color: ${colors.white};
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: rgba(253, 101, 66, 0.8);
      color: ${colors.white};
    }
    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.orange};
      border-color: ${colors.orange};
      box-shadow: 0px 5px 15px rgba(159, 173, 189, 0.15);
    }
  }
  &:disabled,
  &.disabled {
    ${ButtonDisabled}
  }
`;

export const ButtonSecondary = css`
  background-color: ${colors.green};
  color: ${colors.white};
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: rgba(86, 181, 134, 0.8);
      color: ${colors.white};
    }
    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: #519bf7;
      border-color: #519bf7;
    }
  }
  &:disabled,
  &.disabled {
    ${ButtonDisabled}
  }
`;

export const ButtonOutline = css`
  background-color: ${colors.white};
  color: ${colors.orange};
  border: 1px solid ${colors.orange};
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.orange};
      color: ${colors.white};
    }
    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.orange};
      border-color: ${colors.orange};
      box-shadow: 0px 5px 15px rgba(159, 173, 189, 0.15);
    }
  }
  &:disabled,
  &.disabled {
    border-color: ${colors.gray3};
    background-color: ${colors.gray3};
    color: ${colors.gray1};
  }
`;

export const ButtonLink = css`
  background-color: ${colors.white};
  color: ${colors.muted};
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      color: rgba(253, 101, 66, 0.8);
    }
  }
  &:disabled,
  &.disabled {
    ${ButtonDisabled}
  }
`;

export const ButtonGhost = css`
  background-color: ${colors.white};
  color: ${colors.muted};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.06);
  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      color: rgba(253, 101, 66, 0.8);
    }
  }
  &:disabled,
  &.disabled {
    ${ButtonDisabled}
  }
`;

export const ButtonSmallSize = (props: ButtonBaseProps): FlattenSimpleInterpolation => css`
  height: 40px;
  padding: 0 16px;
  font-size: ${componentStyles.text[300].fontSize};
  line-height: ${componentStyles.text[300].lineHeight};
  ${props.icon && props.iconPosition === 'left' && 'padding-left: 40px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 40px;'}
`;

export const ButtonDefaultSize = (props: ButtonBaseProps): FlattenSimpleInterpolation => css`
  height: 60px;
  padding: 0 22px;
  font-size: ${componentStyles.text[300].fontSize};
  line-height: ${componentStyles.text[300].lineHeight};
  ${props.icon && props.iconPosition === 'left' && 'padding-left: 44px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 44px;'}
`;
