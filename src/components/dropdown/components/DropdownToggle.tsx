/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import styled, { css } from 'styled-components';

import { classNames } from 'utils/classnames';

import { IconArrowDown } from 'components/ui-icons';
import { colors } from 'components/ui-provider';
import renderIcon from 'components/ui-provider/utils/renderIcon';
import { DropdownToggleButton } from '../styles/styles';
import { DropdownDirection } from '../types/types';

export type ButtonSizes = 'lg' | 'sm';

export interface DropdownToggleProps {
  // eslint-disable-next-line
  tag?: any;
  caret?: boolean;
  className?: string;
  // eslint-disable-next-line
  color?: any;
  size?: ButtonSizes;
  filled?: boolean;

  // Private properties, should not be used publicly
  block?: boolean;
  isOpen?: boolean;
  dropDirection?: DropdownDirection;
  disabled?: boolean;
  // eslint-disable-next-line
  toggle?: (e: React.SyntheticEvent<any>) => void;
  dropdownType?: 'primary' | 'caption';
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const directionUp = css`
  transform: rotate(180deg);
`;

const directionRight = css`
  transform: rotate(-90deg);
`;

const directionLeft = css`
  transform: rotate(90deg);
  margin-left: -5px;
  margin-right: 8px;
`;

export interface CaretProps {
  dropDirection?: DropdownDirection;
}

export const DropdownToggleIcon = styled('i')<CaretProps>`
  display: inline-block;
  position: absolute;
  right: 8px;
  top: 9px;
  margin-left: 8px;
  font-size: 20px;

  &::before {
    vertical-align: middle;
  }

  ${(props) => props.dropDirection === 'up' && directionUp}
  ${(props) => props.dropDirection === 'right' && directionRight}
  ${(props) => props.dropDirection === 'left' && directionLeft}
`;

class DropdownToggle extends React.Component<DropdownToggleProps> {
  static displayName = 'DropdownToggle';

  static defaultProps = {
    tag: 'button',
    caret: true,
  };

  constructor(props: DropdownToggleProps) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.renderChildren = this.renderChildren.bind(this);
  }

  onClick(e: React.SyntheticEvent): void {
    const { toggle } = this.props;

    e.stopPropagation();

    if (toggle) {
      toggle(e);
    }
  }

  private renderChildren() {
    const { caret, children, isOpen, icon, disabled } = this.props;
    if (!caret) {
      return children;
    }

    return (
      <>
        {icon && renderIcon(icon, 'with-icon')}
        {children}
        {!disabled && <>{isOpen ? <DropdownIconDirectionUp /> : <DropdownIconDirectionDown />}</>}
      </>
    );
  }

  render(): JSX.Element {
    // Omit these properties from `this.props`
    const { toggle: _toggle, ...props } = this.props;

    const {
      tag: _tag,
      children,
      caret: _caret,
      className,
      block: _block,
      color,
      isOpen,
      filled,
      dropdownType,
      icon,
      ...rest
    } = props;

    if (!React.isValidElement(children)) {
      return (
        <DropdownToggleButton
          {...rest}
          block
          usingIcon={icon}
          isOpen={isOpen}
          className={classNames([isOpen && 'is-open', filled && 'is-filled', className, dropdownType])}
          color={color}
          onClick={this.onClick}
        >
          {this.renderChildren()}
        </DropdownToggleButton>
      );
    }

    return (
      <div className={className} onClick={this.onClick} {...rest}>
        {this.renderChildren()}
      </div>
    );
  }
}

const DropdownIconDirection = css`
  position: absolute;
  top: 13px;
  right: 13px;
  height: auto;

  path {
    fill: ${colors.orange};
  }
`;

const DropdownIconDirectionUp = styled(IconArrowDown)`
  ${DropdownIconDirection}
  transform: rotateZ(180deg);
`;

const DropdownIconDirectionDown = styled(IconArrowDown)`
  ${DropdownIconDirection}
`;

export default DropdownToggle;
