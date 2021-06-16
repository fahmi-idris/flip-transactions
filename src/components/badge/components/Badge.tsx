import * as React from 'react';
import styled from 'styled-components';

import { colors } from 'components/ui-provider';

import { BadgeBaseProps } from '../types/types';
import { BadgeStyles } from './styles';

export interface BadgeProps extends BadgeBaseProps {
  /** Additional CSS classes to give to the component */
  className?: string;
  /** Additional CSS styles to give to the component */
  style?: React.CSSProperties;
}

const Root = styled('span')<BadgeProps>`
  ${BadgeStyles}
`;

const Badge: React.FC<BadgeProps> = ({ children, className, style, variant, block, width, ...rest }) => (
  <Root className={className} style={style} variant={variant} block={block} width={width} {...rest}>
    {children}
  </Root>
);

Badge.defaultProps = {
  className: undefined,
  style: undefined,
  block: false,
  variant: 'primary',
  badgeColor: colors.green,
};

Badge.displayName = 'Badge';

export default Badge;
