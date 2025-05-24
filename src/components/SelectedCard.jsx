import React, { useContext } from 'react';
import styled from 'styled-components';
import close from '@/assets/close.svg';
import { SelectedPokemonContext } from '@/context/SelectedPokemonContext';

const StyledSelectedCard = styled.div`
  width: 15%;
  position: relative;
  aspect-ratio: 1 / 2;
  border-color: white;
  border-width: 2px;
  border-style: solid;
  border-radius: 12px;
`;

const PokemonImage = styled.img`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-bottom: 2px solid white;
`;

const Name = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  color: white;
  margin-top: 30%;
`;

const Number = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  color: white;
`;

const DeleteButton = styled.img`
  width: 24px;
  aspect-ratio: 1 / 1;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  border-radius: 12px;
  &:hover {
    background-color: #a80000;
  }
`;

const SelectedCard = ({ index }) => {
  const { selectedPokemon, setSelectedPokemon } = useContext(
    SelectedPokemonContext
  );
  return (
    <StyledSelectedCard>
      <PokemonImage src={selectedPokemon[index].img_url} />
      <Name>{selectedPokemon[index].korean_name}</Name>
      <Number>No.{selectedPokemon[index].id}</Number>
      <DeleteButton
        src={close}
        onClick={() => {
          selectedPokemon.splice(index, 1, undefined);
          const tempArr = [...selectedPokemon];
          setSelectedPokemon(tempArr);
        }}
      />
    </StyledSelectedCard>
  );
};

export default SelectedCard;
