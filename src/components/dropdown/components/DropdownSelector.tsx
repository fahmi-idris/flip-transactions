import * as React from 'react';

import Dropdown from './Dropdown';
import DropdownToggle from './DropdownToggle';
import DropdownMenu from './DropdownMenu';

import { DropdownDirection, DropdownValue, DropdownOption } from '../types/types';
import { DropdownToggleButton } from '../styles/styles';
import { renderLabel } from '../utils/renderLabel';

interface DropdownSelectorProps {
  value?: DropdownValue;
  placeholder?: string;
  block?: boolean;
  loading?: boolean;
  // eslint-disable-next-line
  children?: any;
  disabled?: boolean;
  className?: string;
  dropDirection?: DropdownDirection;
  onSelect?(value?: DropdownValue | undefined): void;
  dropdownType?: 'primary' | 'caption';
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

class DropdownSelector extends React.PureComponent<DropdownSelectorProps> {
  static defaultProps = {
    placeholder: 'Select',
    loading: false,
    block: false,
    direction: 'down',
    dropdownType: 'primary',
  };

  render(): JSX.Element {
    const {
      value,
      className,
      placeholder,
      loading,
      block,
      children,
      disabled,
      onSelect,
      dropDirection,
      dropdownType,
      icon,
    } = this.props;

    const items: DropdownOption[] = renderLabel(children);
    const label = value && items.find((item) => item.value === value)?.label;

    if (loading) {
      return (
        <DropdownToggleButton as="div" block={block} className={className} data-testid="dropdown-toggle-loading">
          Loading...
        </DropdownToggleButton>
      );
    }
    return (
      <Dropdown
        block={block}
        onSelect={onSelect}
        className={className}
        dropDirection={dropDirection}
        disabled={disabled}
      >
        <DropdownToggle icon={icon} filled={!!value} disabled={disabled} dropdownType={dropdownType}>
          {(label || value || placeholder) as string}
        </DropdownToggle>
        <DropdownMenu dropDirection={dropDirection} disabled={disabled}>
          {children}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropdownSelector;
