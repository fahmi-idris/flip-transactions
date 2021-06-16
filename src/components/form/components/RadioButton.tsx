import React, { FC } from 'react';
import styled from 'styled-components';

import { colors, fonts } from 'components/ui-provider';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value?: string;
  label?: string;
}

const RadioButton: FC<Props> = ({ id, value, label, onChange, checked, disabled, ...field }) => (
  <>
    <Radio id={id} type="radio" value={value} onChange={onChange} checked={checked} disabled={disabled} {...field} />
    <RadioLabel htmlFor={id}>{label}</RadioLabel>
  </>
);

const Radio = styled('input')`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    padding-left: 36px;
    cursor: pointer;
    line-height: 19px;
    display: inline-block;
    color: ${colors.black};
    font-family: ${fonts.lato};
    font-size: 14px;
  }

  &:not(:checked) + label:hover::before {
    border: 1px solid ${colors.orange};
  }

  &:checked + label:before,
  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 1px solid ${colors.gray1};
    border-radius: 100%;
    background: #fff;
  }

  &:checked + label:before {
    content: '';
    border: 3px solid rgba(253, 101, 66, 0.4);
  }

  &:checked + label:after,
  &:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: ${colors.orange};
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  &:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  &:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  &:disabled + label:before {
    background: ${colors.gray3};
    border: 1px solid ${colors.gray1};
  }

  &:disabled + label:hover::before {
    background: ${colors.gray3};
    border: 1px solid ${colors.gray1};
  }

  &:disabled + label:after {
    background: ${colors.gray1};
  }
`;

const RadioLabel = styled('label')`
  padding-left: 10px;
  cursor: pointer;
`;

export default RadioButton;
