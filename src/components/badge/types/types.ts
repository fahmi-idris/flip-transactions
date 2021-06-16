import { LayoutProps, PositionProps, FlexboxProps, GridProps, SpaceProps, BorderProps } from 'styled-system';

export type BadgeVariants = 'primary' | 'outline';

export type AllBadgeStyledProps = LayoutProps & PositionProps & FlexboxProps & GridProps & SpaceProps & BorderProps;

export interface BadgeBaseProps extends AllBadgeStyledProps {
  /** Is a block badge. */
  block?: boolean;
  /** The variant of the badge. */
  variant?: BadgeVariants;
  /** The color of the badge. `color` is reserved by ui provider, so we alias its type. */
  badgeColor?: string;
}
