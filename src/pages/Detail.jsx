import MOCK_DATA from '../../mock';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: purple;
`;

const PokemonImage = styled.img`
  width: 15%;
  aspect-ratio: 1 / 1;
`;

const Name = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-top: 1%;
`;

const Types = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-top: 1%;
`;

const Description = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-top: 1%;
`;

const BackButton = styled.button`
  width: 12%;
  height: 4%;
  background-color: red;
  font-size: 20px;
  font-weight: 500;
  color: white;
  margin-top: 2%;
  border-radius: 20px;
  &:hover {
    background-color: #a80000;
  }
`;

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const parsedId = parseInt(id);
  const pokemon = MOCK_DATA.find((item) => item.id === parsedId);

  return (
    <Background>
      <PokemonImage src={pokemon.img_url} />
      <Name>{pokemon.korean_name}</Name>
      <Types>타입: {pokemon.types.join(', ')}</Types>
      <Description>{pokemon.description}</Description>
      <BackButton onClick={() => navigate('/dex')}>뒤로 가기</BackButton>
    </Background>
  );
};

export default Detail;
