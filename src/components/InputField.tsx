import React from 'react';
import styled from 'styled-components';

interface InputFieldProps {
  placeholder: string;
  type: string;
  className?: string;
}

const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &::placeholder {
    color: #888;
  }
`;

export const InputField: React.FC<InputFieldProps> = ({ placeholder, type, className }) => {
  return (
    <div className={className}>
      <Input type={type} placeholder={placeholder} />
    </div>
  );
};
