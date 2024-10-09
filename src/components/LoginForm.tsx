import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogoLogin from './LogoLogin';

const FormContainer = styled.div`
  background: linear-gradient(to bottom, #0082c8, #00578a);
  padding: 2rem;
  border-radius: 1rem;
  width: 80vw;
  max-width: 30rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif; 
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
  font-family: Arial, sans-serif; 
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
  width: 90%;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  font-family: Arial, sans-serif; 
`;

const Link = styled.a`
  color: white;
  text-decoration: none;
  display: block;
  margin-top: 1rem;
  font-family: Arial, sans-serif; 

  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  color: white;
  background-color: #00578a;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: 1rem;
  width: 90%;
  font-size: 1rem;
  font-family: Arial, sans-serif; 

  &:hover {
    background-color: #004a70;
  }
`;

const LoginForm: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/botpage');
  };

  return (
    <FormContainer>
      <LogoLogin src="porto.png" alt="Logo Porto" /> 
      
      <Title>Iniciar sessão</Title>
      <InputGroup>
        <Input type="text" placeholder="Email ou CPF" />
      </InputGroup>
      <InputGroup>
        <Input type="password" placeholder="Senha" />
      </InputGroup>
      
      <Link href="/cadastro">Não tem cadastro? Crie um!</Link>
      <Button type="button" onClick={handleLogin}>Entrar</Button>
      <Button onClick={() => navigate('/')}>
        Voltar à página principal
      </Button>
    </FormContainer>
  );
};

export default LoginForm;
