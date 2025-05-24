import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import pokemonLogo from '@/assets/pokemonLogo.svg';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: purple;
`;

const Title = styled.img`
  width: 40%;
  height: auto;
  background-color: transparent;
`;

const EnterButton = styled.button`
  width: 10%;
  height: 5%;
  margin-top: 1%;
  background-color: red;
  border-radius: 20px;
  pointer-events: all;
  font-size: 20px;
  font-weight: 500;
  color: white;
  &:hover {
    background-color: #a80000;
  }
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Background>
      <Title src={pokemonLogo} />
      <EnterButton
        onClick={() => {
          navigate('dex');
        }}
      >
        Go!
      </EnterButton>
    </Background>
  );
};

export default Home;
