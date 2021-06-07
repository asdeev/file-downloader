import * as React from 'react';

import { ButtonType } from './@types';

interface propTypes {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: () => void;
  type: ButtonType;
}

const Button: React.FC<propTypes> = (props: propTypes) => {
  const { children, className, disabled, onClick, type } = props;
  return (
    <button
      data-testid="button"
      className={`button ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
