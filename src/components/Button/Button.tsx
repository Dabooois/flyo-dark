import React from 'react';
import { Button as StyledButton } from './Button.styles';
interface IButton {
  children: JSX.Element | string;
  className?: string;
}

const Button = (props: IButton) => {
  const { children, className } = props;

  return <StyledButton className={`${className}`}>{children}</StyledButton>;
};

export default Button;
