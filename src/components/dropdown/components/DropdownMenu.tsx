/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled, { css } from 'styled-components';
import { classNames } from 'utils/classnames';
import { radii, colors, componentStyles } from 'components/ui-provider';

import { DropdownDirection, DropdownValue } from '../types/types';

interface DropdownMenuProps {
  isOpen?: boolean;
  floatRight?: boolean;
  className?: string;
  children?: any;
  dropDirection?: DropdownDirection;
  disabled?: boolean;
  onSelect?(value?: DropdownValue): void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  isOpen,
  floatRight = false,
  dropDirection,
  className,
  onSelect,
  disabled,
  children,
}) => {
  const classes = classNames([isOpen && 'show', className]);
  return (
    <Wrapper className={classes} dropDirection={dropDirection} floatRight={floatRight}>
      {React.Children.map(children, (Item: React.ReactElement<any>) =>
        Item
          ? React.cloneElement(Item, {
              onSelect,
              disabled,
            })
          : Item,
      )}
    </Wrapper>
  );
};

DropdownMenu.displayName = 'DropdownMenu';

const floatRightMenu = css`
  right: 0;
  left: auto;
`;

const directionUp = css`
  top: unset !important;
  bottom: 100%;
  margin: 0 0 2px;
`;

const directionRight = css`
  left: 100% !important;
  top: 0 !important;
  margin: 0 0 0 2px;
`;

const directionLeft = css`
  top: 0 !important;
  /*
   * We need to use transform for dropleft because the dropdown menu
   * can't goes over the parent container
   */
  transform: translate3d(calc(-100% - 0.125rem), 0, 0);
`;

const Wrapper = styled('div')<DropdownMenuProps>`
  display: none;
  position: absolute;
  float: left;
  top: 100%;
  left: 0;
  width: 100%;
  min-width: 10rem;
  margin: 2px 0 0;
  font-size: ${componentStyles.text[300].fontSize};
  line-height: ${componentStyles.text[300].lineHeight};
  color: ${colors.black};
  border-radius: ${radii.md}px;
  text-align: left;
  list-style: none;
  background-clip: padding-box;
  z-index: 1000;
  background: ${colors.white};
  border: 1px solid ${colors.muted};
  box-sizing: border-box;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.05);
  padding: 10px 0;

  &.show {
    display: block;
  }

  ${(props) => props.floatRight && props.dropDirection !== 'right' && props.dropDirection !== 'left' && floatRightMenu}
  ${(props) => props.dropDirection === 'up' && directionUp}
  ${(props) => props.dropDirection === 'right' && directionRight}
  ${(props) => props.dropDirection === 'left' && directionLeft}
`;

export default DropdownMenu;
