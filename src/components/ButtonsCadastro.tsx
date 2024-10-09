import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 15px;
  width: calc(100% - 20px);
  box-sizing: border-box;
  color: white;
  background-color: #007bff;
  font-family: sans-serif; 

  &:hover {
    background-color: #0056b3;
  }
`;

const BackButton = styled(Button)`
  background-color: #6c757d;
  margin-top: 10px;

  &:hover {
    background-color: #5a6268;
  }
`;

export const ButtonsCadastro: React.FC = () => {
  return (
    <>
      <Button type="submit">Enviar as Informações</Button>
      <BackButton type="button" onClick={() => window.location.href = '/login'}>
        Voltar
      </BackButton>
    </>
  );
};
