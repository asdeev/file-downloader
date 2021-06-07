import * as React from 'react';

interface propTypes {
  ariaLabel?: string;
  className?: string;
  disabled?: boolean;
  indeterminate: boolean;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
}

const Checkbox: React.FC<propTypes> = (props: propTypes) => {
  const {
    ariaLabel,
    className,
    disabled,
    indeterminate,
    name,
    onChange,
    value,
  } = props;
  return (
    <input
      data-testid="checkbox"
      className={className}
      type="checkbox"
      name={name}
      checked={value}
      ref={(el) => el && (el.indeterminate = indeterminate)}
      onChange={onChange}
      disabled={disabled}
      aria-label={ariaLabel}
    />
  );
};

export default Checkbox;
