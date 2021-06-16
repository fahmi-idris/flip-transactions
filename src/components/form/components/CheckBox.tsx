import React, { FC } from 'react';
import styled from 'styled-components';

import { colors, radii } from 'components/ui-provider';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: React.ReactNode;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  disabled?: boolean;
}

const CheckBox: FC<Props> = ({ id, label, onChange, checked, disabled, ...field }) => (
  <>
    <CheckBoxContainer htmlFor={id}>
      {label}
      <input id={id} type="checkbox" onChange={onChange} checked={checked} disabled={disabled} {...field} />
      <span className="checkmark" />
    </CheckBoxContainer>
  </>
);

const CheckBoxContainer = styled('label')`
  display: block;
  position: relative;
  padding-left: 37px;
  padding-top: 1px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    border: 2px solid ${colors.mutedSecondary};
    box-sizing: border-box;
    border-radius: ${radii.sm}px;
    background: ${colors.white};
  }

  &:hover input:not(:checked) ~ .checkmark {
    border-color: ${colors.orange};
  }

  &:hover input:disabled ~ .checkmark {
    background-color: ${colors.gray3};
    border-color: ${colors.gray1};
  }

  input:checked ~ .checkmark {
    background-color: ${colors.orange};
    border-color: ${colors.gray2};
  }

  input:disabled ~ .checkmark {
    background-color: ${colors.gray3};
    border-color: ${colors.gray1};
  }

  input ~ .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  input:checked ~ .checkmark:after {
    border: 1px solid ${colors.white};
    left: 5px;
    top: 2px;
    width: 5px;
    height: 8px;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  input:disabled:checked ~ .checkmark:after {
    border: solid ${colors.gray1};
    left: 6px;
    top: 3px;
    width: 5px;
    height: 9px;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export default CheckBox;
