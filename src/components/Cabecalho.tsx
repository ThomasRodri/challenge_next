import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f2f2f2;
  font-family: Arial, sans-serif; 
`;

const Logo = styled.img`
  width: 20%;
`;

const LoginButton = styled(Link)`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-family: Arial, sans-serif;

  &:hover {
    background-color: #0056b3;
  }
`;

const Cabecalho: React.FC = () => {
  return (
    <Header>
      <a href="https://www.portoseguro.com.br" target="_blank" rel="noopener noreferrer">
        <Logo src="porto.png" alt="logo da porto" />
      </a>
      <nav>
        <LoginButton to="/login">Login</LoginButton>
      </nav>
    </Header>
  );
};

export default Cabecalho;
