import Dashboard from '@/components/Dashboard';
import PokemonList from '@/components/PokemonList';
import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: purple;
`;

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
  const url = useLocation();
  const param = useParams();
  console.log('url => ', url);
  console.log('param => ', param);

  return (
    <Background>
      <Dashboard
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
      <PokemonList
        selectedPokemon={selectedPokemon}
        setSelectedPokemon={setSelectedPokemon}
      />
    </Background>
  );
};

export default Dex;
