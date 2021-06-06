import * as React from 'react';

interface propTypes {
  className?: string;
  value: string;
}

const Label: React.FC<propTypes> = (props: propTypes) => {
  const { className, value } = props;
  return <span className={`label ${className}`}>{value}</span>;
};

export default Label;
