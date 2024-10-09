import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;      
  text-align: center;
  width: 100%;
  height: 100vh;             
  box-sizing: border-box;
  font-family: 'Arial', sans-serif; 
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  padding: 15px 20px;
  box-sizing: border-box;
  z-index: 1000;
`;

const LogoutButton = styled.button`
  background-color: #ffffff;
  color: #000080;
  border: 2px solid #000080;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  font-family: 'Arial', sans-serif;

  &:hover {
    background-color: #000080;
    color: #ffffff;
  }
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 120px;
  }

  @media (max-width: 400px) {
    width: 100px;
  }
`;

const MessageBox = styled.div`
  background: linear-gradient(to right, #000080, #0000ff);
  color: white;
  padding: 40px;
  border-radius: 10px;
  font-size: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  margin: 20px 0;
  text-align: center;
  font-family: 'Arial', sans-serif; 

  @media (max-width: 600px) {
    font-size: 20px;
    padding: 30px;
  }

  @media (max-width: 400px) {
    font-size: 18px;
    padding: 20px;
  }
`;

const BotPage: React.FC = () => {
  return (
    <div>
      <Header>
        <LogoutButton onClick={() => window.location.href = '/'}>
          Sair
        </LogoutButton>
      </Header>
      <Container>
        <Logo src="porto.png" alt="Porto Seguro" />
        <MessageBox>
          Acesso ao bot indisponível.
        </MessageBox>
      </Container>
    </div>
  );
};

export default BotPage;
