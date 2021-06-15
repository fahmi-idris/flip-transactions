import * as React from 'react';

export interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

/* eslint-disable import/prefer-default-export */
export const iconDefaultProps: BaseIconProps = {
  size: 24,
  fill: '#3B4856',
};
