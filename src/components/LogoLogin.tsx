
import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 150px; 
  height: auto;
  display: block;
  margin: 0 auto; 
  padding-bottom: 1rem;
  font-family: Arial, sans-serif; 
`;

interface LogoProps {
  src: string;
  alt: string;
}

const LogoLogin: React.FC<LogoProps> = ({ src, alt }) => {
  return <LogoImage src={src} alt={alt} />;
};

export default LogoLogin;
