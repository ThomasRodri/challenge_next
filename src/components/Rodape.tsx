import React from 'react';
import styled from 'styled-components';

const Footer = styled.footer`
  padding: 20px;
  background-color: black;
  text-align: center;
  color: white;
`;

const Logo = styled.img`
  width: 150px;
`;

const Rodape: React.FC = () => {
  return (
    <Footer>
      <Logo src="imagem.white porto.png" alt="" />
    </Footer>
  );
};

export default Rodape;
