import Dashboard from '@/components/Dashboard';
import PokemonList from '@/components/PokemonList';
import { SelectedPokemonContext } from '@/context/SelectedPokemonContext';
import React, { useState } from 'react';
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

  return (
    <SelectedPokemonContext.Provider
      value={{
        selectedPokemon,
        setSelectedPokemon,
      }}
    >
      <Background>
        <Dashboard />
        <PokemonList />
      </Background>
    </SelectedPokemonContext.Provider>
  );
};

export default Dex;
