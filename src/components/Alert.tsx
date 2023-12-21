import { ReactNode } from 'react';
import Button from './Button';

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>{children}</strong>
    </div>
  );
};

export default Alert;
