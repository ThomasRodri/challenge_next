import React from 'react';
import styled from 'styled-components';

const GlobalStyle = styled.div`
  font-family: Arial, sans-serif;
`;

const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
`;

const TextSection = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.span`
  font-size: 1.4rem;
  color: white;
  background-color: #0082c8;
  padding: 5px 10px;
  border-radius: 5px;
`;

const Heading = styled.h2`
  margin-bottom: 10px;
  font-size: 2.4rem;
  color: #0065b3;
`;

const Paragraph = styled.p`
  font-size: 1.8rem;
  color: #333;
`;

const Button = styled.a`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  font-size: 1.6rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const ImageRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
`;

const WomanImage = styled.img`
  width: 15%;
  height: auto;
`;

const RobotImage = styled.img`
  width: 15%;
  height: auto;
`;

const CarImageContainer = styled.div`
  position: relative;
  width: 30%;
`;

const Gosma = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const Onix = styled.img`
  position: relative;
  width: 100%;
  height: auto;
`;

const InformacaoBot: React.FC = () => {
  return (
    <GlobalStyle>
      <Container>
        <TextSection>
          <Label>BRASIL</Label>
          <Heading>Conserto automobilístico</Heading>
          <Paragraph>+100 OFICINAS</Paragraph>
        </TextSection>

        <ImageRow>
          <WomanImage src="mulher.png" alt="Mulher" />
          <RobotImage src="robo.png" alt="Robozinho" />
          <CarImageContainer>
            <Gosma src="vector.png" alt="gosma" />
            <Onix src="branco-summit-novo-onix.png" alt="carro" />
          </CarImageContainer>
        </ImageRow>

        <Heading>Atendimento via IA</Heading>
        <Paragraph>
          Não deixe passar a oportunidade de ser atendido pelo <strong>Visinho!</strong> Nossa IA focada em lhe guiar durante todo o processo.
        </Paragraph>
        <Button href="/login">COMECE JÁ!</Button>
      </Container>
    </GlobalStyle>
  );
};

export default InformacaoBot;
