import React from 'react';
import { InputField } from './InputField';
import { ButtonsCadastro } from './ButtonsCadastro';
import styled from 'styled-components';

const Container = styled.section`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  max-width: 400px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: Arial, sans-serif; 
`;

const Logo = styled.img`
  width: 65%;
  border-radius: 8px 8px 0 0;
  margin-bottom: 20px;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #333;
  font-family: Arial, sans-serif; 
`;

const InputWrapper = styled.div`
  width: 100%;

  input {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: Arial, sans-serif; 

    &::placeholder {
      color: #888;
    }
  }
`;

const CadastroC: React.FC = () => {
  return (
    <Container>
      <Logo src="porto.png" alt="Logo" />
      <Heading>Inicie seu Cadastro!</Heading>
      <InputWrapper>
        <InputField placeholder="Nome completo" type="text" className="nome-text" />
        <InputField placeholder="Email ou CPF" type="text" className="email-cpf" />
        <InputField placeholder="Crie sua senha" type="password" className="senha" />
        <InputField placeholder="Confirme sua senha" type="password" className="senha-confirmar" />
      </InputWrapper>
      <ButtonsCadastro />
    </Container>
  );
};

export default CadastroC;
