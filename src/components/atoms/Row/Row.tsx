import * as React from 'react';

interface propTypes {
  children: React.ReactNode;
  className?: string;
}

const Row: React.FC<propTypes> = (props: propTypes) => {
  const { children, className } = props;
  return <tr className={`row ${className}`}>{children}</tr>;
};

export default Row;
