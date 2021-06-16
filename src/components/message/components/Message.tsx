import * as React from 'react';

import { Heading, Paragraph } from 'components/ui-provider';
import { BaseMessageProps, Root, Inner } from '../styles';

export interface MessageProps extends BaseMessageProps {
  /** Message box content. Could be a string or a `ReactNode`. */
  message: string | React.ReactNode;
  /** Message title. */
  title?: string;
  /** Additional CSS classes to give to the banner. */
  className?: string;
  /** Additional CSS properties to give to the banner. */
  style?: React.CSSProperties;
}

/** Banners are used to convey important information to users. */
const Message: React.FC<MessageProps> = ({ className, style, title, message, state, ...rest }) => {
  const renderMessage = () => {
    if (typeof message === 'function') {
      return message;
    }

    return (
      <Paragraph display="inline-block" scale={300} m={0}>
        {message}
      </Paragraph>
    );
  };

  return (
    <Root className={className} style={style} state={state} {...rest}>
      <Inner>
        {title ? (
          <Heading as="h4" mb="sm" scale={400} fontWeight={600}>
            {title}
          </Heading>
        ) : null}
        {renderMessage()}
      </Inner>
    </Root>
  );
};

Message.defaultProps = {
  state: 'success',
};

Message.displayName = 'Message';

export default Message;

/** @deprecated - use `Message` instead */
export const Banner = Message;
