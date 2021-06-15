import { DropdownOption } from '../types/types';

/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line
export const renderLabel = (children: any): DropdownOption[] => {
  if (children) {
    if (Array.isArray(children)) {
      return children.map((item) => ({
        label: item.props.children,
        value: item.props.value,
      }));
    }

    return [
      {
        label: children.props.children,
        value: children.props.value,
      },
    ];
  }

  return [];
};
