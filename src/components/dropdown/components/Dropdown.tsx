/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-find-dom-node */
import * as React from 'react';
import styled from 'styled-components';

import { classNames } from 'utils/classnames';
import { DropdownDirection, DropdownValue } from '../types/types';

interface DropdownProps {
  isOpen?: boolean;
  className?: string;
  disabled?: boolean;
  block?: boolean;
  dropDirection?: DropdownDirection;
  children?: any;
  onSelect?: (value?: DropdownValue) => void;
}

interface DropdownState {
  isOpen?: boolean;
}

class Dropdown extends React.Component<DropdownProps, DropdownState> {
  static defaultProps = {
    isOpen: false,
    block: false,
    dropDirection: 'down',
  };

  constructor(props: DropdownProps) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  // TODO: rewrite unsafe props
  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps: DropdownProps): void {
    if (nextProps) {
      this.setState((prevState) => ({
        ...prevState,
        isOpen: nextProps.isOpen,
      }));
    }
  }

  onSelect(value?: DropdownValue): void {
    const { onSelect } = this.props;
    if (onSelect && value) {
      onSelect(value);
    }

    this.setState({ isOpen: false });
  }

  toggle(): void {
    const { disabled } = this.props;
    const { isOpen } = this.state;

    if (disabled) {
      return;
    }

    if (!isOpen) {
      // if dropdown will open then add event listener handleClickOutside
      document.addEventListener('click', this.handleClickOutside as any, false);
    } else {
      // if dropdown will close then remove event listener handleClickOutside
      document.removeEventListener('click', this.handleClickOutside as any, false);
    }

    this.setState({ isOpen: !isOpen });
  }

  handleClickOutside(_: React.SyntheticEvent): void {
    try {
      this.setState({ isOpen: false });
    } catch (error) {
      // do nothing
    }
  }

  render(): JSX.Element {
    // Omit these properties from `this.props`
    const { isOpen: _, onSelect: _onSelect, ...props } = this.props;
    const { isOpen } = this.state;

    const { className, children, block, dropDirection, disabled, ...rest } = props;

    const classes = classNames(className);

    // TODO: use new React context instead of cloneElement
    return (
      <DropdownWrapper className={classes} block={block} dropDirection={dropDirection} disabled={disabled} {...rest}>
        {React.Children.map(children, (Item: React.ReactElement<any>) => {
          return Item &&
            Item.type &&
            // eslint-disable-next-line
            ['DropdownMenu', 'DropdownToggle'].some((type) => type === (Item.type as any).displayName)
            ? React.cloneElement(Item, {
                ...rest,
                dropDirection,
                isOpen,
                toggle: this.toggle,
                onSelect: this.onSelect,
                disabled,
              })
            : Item;
        })}
      </DropdownWrapper>
    );
  }
}

export default Dropdown;

const DropdownWrapper = styled('div')<DropdownProps>`
  display: ${(props: DropdownProps) => (props.block ? 'block' : 'inline-block')};
  position: relative;
  ${(props: DropdownProps) => (props.block ? 'width: 100%' : '')};
`;
