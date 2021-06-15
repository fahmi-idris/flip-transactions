import * as React from 'react';
import styled from 'styled-components';

import { classNames } from 'utils/classnames';
import { colors, fonts } from 'components/ui-provider';
import { DropdownValue } from '../types/types';

interface DropdownItemProps {
  value?: DropdownValue;
  // eslint-disable-next-line
  children?: any;
  className?: string;
  header?: boolean;
  divider?: boolean;
  active?: boolean;
  disabled?: boolean;
  // eslint-disable-next-line
  onClick?(event: React.SyntheticEvent<any>): void;

  // private
  onSelect?(value?: DropdownValue): void;
}

class DropdownItem extends React.Component<DropdownItemProps> {
  static defaultProps = {
    active: false,
    disabled: false,
  };

  constructor(props: DropdownItemProps) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  // eslint-disable-next-line
  onClick(event: React.SyntheticEvent<any>) {
    const { value, onClick, onSelect } = this.props;

    if (onClick) {
      onClick(event);
    }

    if (onSelect) {
      onSelect(value);
    }
  }

  render(): JSX.Element {
    const {
      value: _value,
      onSelect: _onSelect,
      children,
      className,
      header,
      divider,
      active,
      disabled,
      ...props
    } = this.props;
    const classes = classNames([active && 'active', disabled && 'disabled', className]);

    if (header) {
      return <DropdownHeader data-testid="dropdown-header">{children}</DropdownHeader>;
    }

    if (divider) {
      return <DropdownDivider data-testid="dropdown-divider" />;
    }

    if (React.isValidElement(children)) {
      // eslint-disable-next-line
      return React.cloneElement(children as any, {
        ...props,
        className: classes,
        onClick: this.onClick,
      });
    }

    return (
      <Wrapper {...props} onClick={this.onClick} className={classes}>
        {children}
      </Wrapper>
    );
  }
}

const DropdownDivider = styled('div')`
  height: 0;
  margin: 0.5rem 0;
  overflow: hidden;
  border-top: 1px solid #e9ecef;
`;

const DropdownHeader = styled('div')`
  display: block;
  padding: 0.5rem 1.5rem;
  margin-bottom: 0;
  font-size: 0.875rem;
  color: #6c757d;
  white-space: nowrap;
`;

const Wrapper = styled('a')`
  display: block;
  width: 100%;
  padding: 15px 25px;
  clear: both;
  color: ${colors.black};
  background-color: transparent;
  border: 0;
  text-align: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${fonts.lato};

  &.selected {
    color: ${colors.black};
  }

  &:not(.disabled) {
    cursor: pointer;

    &:hover {
      background-color: rgba(253, 101, 66, 0.2) !important;
      text-decoration: none;
      color: ${colors.black} !important;
    }

    &:focus,
    &:active {
      background-color: ${colors.white} !important;
      color: ${colors.black} !important;
      text-decoration: none;
    }
  }

  &.disabled,
  &:disabled {
    color: ${colors.gray3} !important;
    background-color: transparent;
  }
`;

export default DropdownItem;
