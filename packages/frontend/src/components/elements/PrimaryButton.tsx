import React from 'react';
import '../../styles/elements/primaryButton.css';

const PrimaryButton = ({ children, type = 'submit', onClick }: IPrimaryButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="PrimaryButton">
      {children}
    </button>
  );
};

interface IPrimaryButtonProps {
  children: string;
  type?: 'submit' | 'reset' | 'button';
  onClick?: VoidFunction;
}

export default PrimaryButton;