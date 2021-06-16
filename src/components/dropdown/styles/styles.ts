import styled, { css } from 'styled-components';

import { colors, fonts } from 'components/ui-provider';
import { Button, ButtonProps } from 'components/button';

export const dropdownMenu = css``;

const Block = css`
  display: block;
  width: 100%;
`;

const Icon = css`
  display: flex;
  align-items: center;
`;

export interface DropdownToggleButtonProps extends ButtonProps {
  usingIcon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

// eslint-disable-next-line
export const DropdownToggleButton: any = styled(Button)<DropdownToggleButtonProps>`
  ${(props) => props.block && Block};
  ${(props) => props.usingIcon && Icon};
  position: relative;
  text-align: left;
  border-radius: 4px;
  background: ${colors.white};
  border: 1px solid ${colors.mutedSecondary};
  color: ${colors.black};
  box-shadow: none;
  padding: 16px 24px;
  height: 53px;
  letter-spacing: 0.2px;
  line-height: 1.538rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${fonts.lato};

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:hover {
    color: ${colors.black};
    border-color: ${colors.mutedSecondary};
    background-color: ${colors.white} !important;
    color: ${colors.black} !important;
  }

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
    border-color: ${colors.mutedSecondary} !important;
    background-color: ${colors.white} !important;
    color: ${colors.black} !important;
  }

  &.is-filled {
    color: ${colors.black};
  }

  &.caption {
    background: ${colors.white};
    border: none;

    svg {
      path {
        fill: ${colors.black};
      }
    }
  }

  .loading-icon {
    position: absolute;
    top: 7px;
    right: 10px;
  }

  &:disabled {
    background: ${colors.gray3};
    border-color: ${colors.muted};
    &:hover {
      color: ${colors.muted} !important;
      background-color: ${colors.gray3} !important;
    }

    svg {
      path {
        fill: ${colors.muted};
      }
    }
  }

  svg.with-icon {
    margin-right: 15px;
  }
`;
