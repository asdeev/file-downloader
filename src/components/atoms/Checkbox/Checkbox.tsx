import * as React from 'react';

interface propTypes {
  className?: string;
  disabled?: boolean;
  indeterminate: boolean;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
}

const Checkbox: React.FC<propTypes> = (props: propTypes) => {
  const { className, disabled, indeterminate, name, onChange, value } = props;
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
    />
  );
};

export default Checkbox;
